import  express  from "express";
import { getusers } from "../Controllers/users";

Router.post("/signin", async (req, res) => {
    try {
        const user = getusers(req.body.email)
        if(!user){

        }
        res.status(400).json({data : "Given email is already exist"})
    } catch (error) {
        console.log(error)
        res.status(500).json({data: "Internal server error"})
    }
})