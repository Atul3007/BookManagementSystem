const express=require("express");
const { getbookController, createBook, getBookByid } = require("../controller/bookController");

const bookrouter=express.Router();

bookrouter.get("/all-books",getbookController);
bookrouter.post("/create-book",createBook);
bookrouter.get("book-id:id",getBookByid)

module.exports={
    bookrouter
}