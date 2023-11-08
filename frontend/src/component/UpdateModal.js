import React, { useState } from 'react';
import "../index.css";
import axios from 'axios';

function UpdateModal({ isOpen, onClose, data }) {
  const [updatedData, setUpdatedData] = useState(data);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleUpdate = async() => {
    const obj={title:updatedData.title,summary:updatedData.summary,author:updatedData.author}
    console.log({obj,updatedData})
    const {data}=await axios.put(`http://localhost:8000/api/update-book/${updatedData._id}`,obj);
    alert(data.message);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Update Data</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={updatedData.title}
          onChange={handleInputChange}
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          value={updatedData.author}
          onChange={handleInputChange}
        />
        <label htmlFor="summary">Summary:</label>
        <input
          type='text'
          name="summary"
          value={updatedData.summary}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateModal;
