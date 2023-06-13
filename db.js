import { MongoClient } from "mongodb";
import Obj from "mongodb"

const mongourl = "mongodb+srv://bharath:bharath123@cluster0.mom1cci.mongodb.net/?retryWrites=true&w=majority"
 export async function createConnection(){
   const client = new MongoClient(mongourl)
   await client.connect()
   console.log("mongodb is connected sucessfully")
   return client
}

export var ObjectId = Obj.ObjectId;
 export const client = await createConnection();