import { ObjectId } from "mongodb";
import { client } from "../db.js";


export function getallstudents(req){
   return client
   .db("guvi")
   .collection("students")
   .find(req.query)
   .toArray()
}

export function getelementbyid(id){
   return client
   .db("guvi")
   .collection("students")
   .findOne({_id: new ObjectId(id)})
}

export function addstudents(data){
   return client
   .db("guvi")
   .collection("students")
   .insertOne(data)
}