from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from routes import users, barris


app = FastAPI()

app.include_router(users.router)
app.include_router(barris.router)


@app.get("/")
def root():
    return RedirectResponse(url="/docs")
