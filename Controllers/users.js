import { client } from "../db.js";

export function users(userinfo){
    return client
    .db("guvi")
    .collection("users")
    .insertOne(userinfo)
 }

 
export function getusers(useremail){
    return client
    .db("guvi")
    .collection("users")
    .insertOne({email : useremail})
 }