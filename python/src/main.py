
from fastapi import FastAPI
from faker import Faker

fake = Faker()
app = FastAPI()


@app.get("/")
def read_root():
    return  {"greeting": f"Hello {fake.name()}"}
