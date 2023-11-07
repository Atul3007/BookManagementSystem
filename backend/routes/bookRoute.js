const express=require("express");
const { getbookController, createBook } = require("../controller/bookController");

const bookrouter=express.Router();

bookrouter.get("/all-books",getbookController)
bookrouter.post("/create-book",createBook)

module.exports={
    bookrouter
}