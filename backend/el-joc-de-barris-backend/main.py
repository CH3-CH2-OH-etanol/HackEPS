from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from routes import users


app = FastAPI()

app.include_router(users.router)


@app.get("/")
def root():
    return RedirectResponse(url="/docs")

@app.get("/health")
def health_check():
    return {"hola": "mundo"}