import connectDb from "./db/iindex.js";
import dotenv from 'dotenv'

dotenv.config({
  path: './.env'
})
connectDb()


// const app = express()
// const port = process.env.PORT || 8000;
// import express from 'express'
/*
( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
      console.log("error:", error)
      throw error
    })

    app.listen(port, () => {
      console.log(`App is listening on the port ${port}`)
    })
  } catch (error) {
    console.error("Error: ", error)
    throw error
  }
})()

*/