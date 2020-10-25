from pymongo import MongoClient
import bcrypt

client = MongoClient("mongodb+srv://user:pwd@cluster0.s2ozh.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = client.get_database("data")

def get_stats(userid):
    k = db.users.find_one({"id":userid})
    
    if k != None:

        return {"status":"success", "pace": k['pace'], "eloquence": k["eloquence"], "word_choice": k["word_choice"], "pronunciation":k["pronunciation"], "overall_score":k["overall_score"]}

    else:
        return {"status":"failed"}

def get_stats_data(userid):
    try:
        return get_stats(userid)
    except:
        return {"status":"failed"}
