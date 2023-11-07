const { bookModel } = require("../models/bookModel");

// --------get all books-------

const getbookController=async(req,res)=>{
  try {
    const books=await bookModel.find({});
    res.status(200).send({
        success: true,
         books
      });
  } catch (error) {
    res.status(400).send({
        success: false,
        error: error.message,
        message: "Error in getting product",
      });
  }
}

// --------crate book-------

const createBook = async (req, res) => {
    try {
      const { title, author, summary} = req.body;
       
      if (
        !title ||
        !author ||
        !summary
      ) {
        return res.status(400).send({
          message: "all fields required",
        });
      }
      const book = new bookModel({ ...req.body });
      await book.save();
  
      res.status(201).json({
        success: true,
        message: "Product created successfully",
        book,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        error: error.message,
        message: "Error in creating product",
      });
    }
  };
  
module.exports={
    getbookController,
    createBook
}