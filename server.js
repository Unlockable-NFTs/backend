//> ---------- PACKAGES ---------------
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")




//> ------- Global Variables ------------
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 8000
const MONGO_DB_URI = process.env.MONGO_DB_ATLAS_URI || "mongodb://localhost:27017/test"

//> ------- Global Middlewares -------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


// ---------- main() ------------------
async function main() {
    console.log("Connecting to database...")
    mongoose.connect(MONGO_DB_URI, _ => {
        console.log(`Connected to database.`)
    })

}

/**
 * 
 * 
 * 
 * 
 */
console.clear()
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
    main()
})