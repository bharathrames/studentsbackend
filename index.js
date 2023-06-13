import express from "express"
import { createConnection } from "./db.js"
import { studentsrouter } from "./Routes/students.js"
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT

const app = express()

app.use(express.json())

const client = await createConnection()

app.use("/students",studentsrouter)
   
app.listen(PORT, () => console.log("server is running in localhost:9000"))

