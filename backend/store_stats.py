from pymongo import MongoClient
import bcrypt

client = MongoClient("mongodb+srv://user:pwd@cluster0.s2ozh.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = client.get_database("data")

def store_stats(userid, pace, eloquence, word_choice, pronunciation, overall_score):
    k = db.users.find_one({"id":userid})
    
    if k != None:

        newvalues = {"$push": {"pace":pace, "eloquence":eloquence, "word_choice":word_choice, "pronunciation":pronunciation, "overall_score":overall_score}}
        filter = { 'id': userid } 
        db.users.update(filter, newvalues)

        return {"status":"success"}

    else:
        return {"status":"failed"}

def put_data(userid, pace, eloquence, word_choice, pronunciation, overall_score):
    try:
        return store_stats(userid, pace, eloquence, word_choice, pronunciation, overall_score)
    except:
        return {"status":"failed"}

