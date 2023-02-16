import express, { request, response } from "express"
import dotenv from "dotenv"

import items from "./data/items.js"
//import users from "./data/users.js"
//import orders from "./data/orders.js"

dotenv.config()

const APP = express()
const PORT = process.env.PORT || 8000

//items endpoints
APP.get("/", (request, response) => {
    response.send("Authorized")
})

//get all items
APP.get("/api/v1/items", (request, response) => {
    response.json(items)
})

//get items with specific id
APP.get("/api/v1/items/:id", (request, response) => {
    const item = items.find((item) => item._id === request.params.id)
    response.json(item)
})

APP.listen(PORT, console.log(`Server is running at port ${PORT}`))
