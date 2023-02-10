import express, { request, response } from "express"
import dotenv from "dotenv"
import items from "./data/items"

dotenv.config()

const APP = express()
const PORT = process.env.PORT || 8000

const { id } = useParams()

APP.get("/", (request, response) => {
    response.send("Authorized")
})

APP.get("/api/v1/items", (request, response) => {
    response.json(items)
})

APP.get("/api/v1/items/:id", (request, response) => {
    const item = items.find((item) => item._id === request.id)
    response.json(item)
})

APP.listen(PORT, console.log(`Server is running at port ${PORT}`))