import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import UpdateModal from "./UpdateModal";

const Table = (data) => {
  const [book, setBook] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(Boolean);
  const [selectedId, setSelectedId] = useState("");

  const newData = data.data;

  useEffect(() => {
    setBook(newData);
  }, [newData]);
  //console.log(book)

  const deleteBook = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://glorious-bull-slacks.cyclic.app/${id}`
      );
      alert(data.message);
      const updatedList = book.filter((item) => item._id !== id);
      setBook(updatedList);
    } catch (error) {
      alert("error in deleting");
    }
  };

  const updateBook = async (id) => {
    try {
      setSelectedId(id);
      setIsModalOpen(true);
    } catch (error) {
      alert("Error in updating");
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Author</th>
            <th>Summary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {book?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.summary}</td>
              <button
                className="delete-button"
                onClick={() => {
                  deleteBook(item?._id);
                }}
              >
                Delete
              </button>
              <button
                className="update-button"
                onClick={() => {
                  updateBook(item);
                }}
              >
                Update
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <UpdateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedId}
        />
      )}
    </>
  );
};

export default Table;
