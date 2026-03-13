import { app } from "./app.js";
import connectDb from "./db/db.js";
import dotenv from 'dotenv'

dotenv.config({
  path: './.env'
})

const port = process.env.PORT || 8000

connectDb()
.then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
  })
})
.catch((err) => {
  console.log("mongo db connection failed !!", err)
})