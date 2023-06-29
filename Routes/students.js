import  express  from "express";
import { addstudents, getallstudents, getelementbyid } from "../Controllers/students.js";


const router = express.Router()

router.get("/hello", async (req, res) => {
    try {
        const students = await getallstudents(req)
        if (students.length == 0){
           res.status(400).json({data: "user not found"})
           return
        }
        res.status(200).json({data: students})
     } catch (error) {
        console.log(error)
        res.status(500).json({data: "Internal server error"})
     }
})


//using based on id using params
router.get("/:id", async (req, res) => {
   try {
      const {id} = req.params;
      const students = await getelementbyid(id)
      if(!students){
         res.status(400).json({data: "user not found"})
         return
      }
      res.status(200).json({data: students})
   } catch (error) {
      console.log(error)
      res.status(500).json({data: "Internal server error"})
   }
})

//adding a student
router.post("/add", async (req, res) => {
try {
   const newstudent = req.body
   if(!newstudent){
     return res.status(400).json({data: "no details provided"})
   }
   const result = await addstudents(newstudent)
   res.status(200).json({data: {result : result, message : "New student added sucessfully"}})
} catch (error) {
   console.log(error)
   res.status(500).json({data: "Internal server error"})
}
})


export const studentsrouter = router