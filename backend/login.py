from pymongo import MongoClient
import bcrypt

client = MongoClient("mongodb+srv://user:pwd@cluster0.s2ozh.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = client.get_database("data")

def login(email, password):
    k = db.users.find_one({"email":email})

    if k != None:
        x = bcrypt.hashpw(password.encode('utf-8'), k["password"])
        
        
        if x == k["password"]:
            return {"status":"success", "id":k['id']}
        else:
            return {"status":"failed"}

    else:
        return {"status":"failed"}