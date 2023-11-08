import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import Table from './../component/Table';
import { useList } from "../context/BookList";

const Book = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [allbooks, setAllbooks] = useState([]);
 const [list,setList] = useList();

  const createBook = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/create-book",
        { title, summary: description, author }
      );
      data?.success ? alert(data.message) : alert("error");
      fetchData();
      setTitle("");
      setAuthor("");
      setDescription("");
    } catch (error) {
      console.log({ error, message: "error in creating" });
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/all-books");
      setAllbooks(response.data.books);
      setList(response.data.books);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <>
    <div>
      <form className="book-form">
        <label>Title</label>
        <input
          type="text"
          placeholder="enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          placeholder="enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={createBook} className="add-button">
          Add
        </button>
      </form>
    </div>
    <Table data={list} />
    </>
  );
};

export default Book;
