import express, { request, response } from "express"
import dotenv from "dotenv"


import items from "./data/items.js"
import users from "./data/users.js"
import orders from "./data/orders.js"

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

//endpoint for users
//get all users
APP.get("/api/v1/users", (request, response) => {
    response.json(users)
})

//get single user
APP.get("/api/v1/users/:id", (request, response) => {
    const user = users.find((user) => user.id === request.params.id)
    if (user) {
      response.json(user)
    } else {
      response.status(404).json({ message: "User not found" })
    }
  })

//get all orders
APP.get("/api/v1/orders", (request, response) => {
    response.json(orders)
})

//get single order
APP.get("/api/v1/orders/:id", (request, response) => {
    const order = orders.find((order) => order.id === request.params.id)
    if (order) {
        response.json(order)
    } else {
        response.status(404).json({ message: "Order not found" })
    }
})

APP.listen(PORT, console.log(`Server is running at port ${PORT}`))

