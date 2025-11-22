from pymongo import MongoClient

MONGO_USER = "admin"
MONGO_PASS = "secret"
MONGO_HOST = "localhost"
MONGO_PORT = 27017
MONGO_DB = "mydatabase"

mongo_url = f"mongodb://{MONGO_USER}:{MONGO_PASS}@{MONGO_HOST}:{MONGO_PORT}/{MONGO_DB}?authSource=admin"
client = MongoClient(mongo_url)

db = client[MONGO_DB]

users_collection = db["users"]
counters_collection = db["counters"]  
