from pymongo import MongoClient
import bcrypt
import uuid

client = MongoClient("mongodb+srv://user:pwd@cluster0.s2ozh.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = client.get_database("data")

def generate_id():
   return str(uuid.uuid1())

def register(name, email, password):
    try:
        if db.users.find_one({"email":email}) == None:
            hashp = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
            userid = generate_id()
            k = {"name":name, "email":email, "password":hashp, 'id':userid, "pace":[], "eloquence":[], "word_choice": [], "pronunciation":[], "overall_score":[]}
            db.users.insert_one(k)
            return {"status":"success", "id":userid}
        else:
            return {"status":"failed"}
    except:
        return {"status":"failed"}