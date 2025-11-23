from pydantic import BaseModel

class User(BaseModel):
    username: str
    name: str
    surname: str
    password: str
    email: str
    postal_code: int