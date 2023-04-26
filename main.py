from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/")
def read_root():
    with open("squadapp\public\index.html", "r") as f:
        html_content = f.read()
    return HTMLResponse(content=html_content, status_code=200)
