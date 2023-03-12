import express, { request, response } from "express"
import asyncHandler from "express-async-handler"
import item from "../../models/itemModel.js"

const ROUTER = express.Router()

ROUTER.get(
    "/", 
    asyncHandler(async (request, response) => {
        const ITEMS = await item.find({})
        response.json(ITEMS)
    })
)

ROUTER.get(
    "/:id",
    asyncHandler(async(request, response) => {
        const ITEM = await item.findById(request.params.id)

        if(ITEM) {
            response.json(ITEM)
        }else{
            response.status(404).json({ message: "Product not found" })
        }
    })
)

export default ROUTER