from fastapi import APIRouter, HTTPException

from db import users_collection
from models import User
router = APIRouter(prefix="/users", tags=["users"])

@router.post("/")
def create_user(user: User):
    if users_collection.find_one({"username": user.username}):
        raise HTTPException(status_code=400, detail="Username already exists")
    
    user_dict = user.dict()
    result = users_collection.insert_one(user_dict)
    user_dict["_id"] = str(result.inserted_id)  
    return {"message": "User created", **user_dict}

@router.get("/")
def list_users():
    users = list(users_collection.find({}, {"_id": 0})) 
    return users

@router.get("/{username}")
def get_user(username: str):
    user = users_collection.find_one({"username": username}, {"_id": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.delete("/{username}")
def delete_user(username: str):
    result = users_collection.delete_one({"username": username})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted"}

@router.delete("/")
def delete_all_users():
    result = users_collection.delete_many({})
    return {"message": f"{result.deleted_count} users deleted"}
