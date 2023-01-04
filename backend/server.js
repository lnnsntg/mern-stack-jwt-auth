const express = require("express")
const colors = require("colors")
const connectDB = require("./config/db")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 5000
const apiRoutes = require("./routes/goalRoutes")
const errorHandler = require("./middleware/errorMiddleware")


connectDB()


// Middleware

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use(apiRoutes)
app.use(errorHandler)
//---------------------------------------------------------

app.listen(port, () => {
    console.log(`Server running on port ${port}`.magenta)
})