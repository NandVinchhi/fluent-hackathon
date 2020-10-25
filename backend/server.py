from flask import Flask, request
app = Flask(__name__)

from flask_cors import CORS
CORS(app)

from audio import *
from get_stats import *
from store_stats import *
from register import *
from login import *

@app.route('/login', methods=["GET", "POST"])
def login_endpoint():
    data = request.json
    
    try:
        return login(data["email"], data["password"])
    except:
        return {"status":"failed"}

@app.route('/register', methods=["GET", "POST"])
def register_endpoint():
    data = request.json
                
    try:
        return register(data["name"], data["email"], data["password"])
    except:
        return {"status":"failed"}
    

@app.route('/stats', methods=["GET", "POST"])
def get_data_endpoint():
    data = request.json
    try:
        return get_stats_data(data["userid"])
    except:
        return {"status":"failed"}
    

@app.route('/audio', methods=["GET", "POST"])
def audio_endpoint():
    data = request.json
    try:
        k = get_data(data["audio"])
        x = put_data(data["userid"], k["pace"], k["eloquence"], k["word_choice"], k["pronunciation"], k["overall_score"])
        if x["status"] == "failed":
            return {"status":"failed"}
        return k
    except:
        return {"status":"failed"}
if __name__ == "__main__":
    app.run()
