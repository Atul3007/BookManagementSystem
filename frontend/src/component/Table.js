import React, { useEffect, useState } from 'react'
import "../index.css";
import axios from 'axios';

const Table = (data) => {
     const[book,setBook]=useState([]);
     const newData=data.data;
     useEffect(()=>{
        setBook(newData);
     },[newData])
   //console.log(book)

   const deleteBook=async(id)=>{
    try {
        const {data}=await axios.delete(`http://localhost:8000/api/delete/${id}`)
        alert(data.message);   
        const updatedList = book.filter((item) => item._id !== id);
        setBook(updatedList);
    } catch (error) {
        alert("error in deleting")
    }
   }

   const updateBook=async(id)=>{
    try {
        alert(id)
    } catch (error) {
        alert("Error in updating")
    }
   }

  return (
    <table>
      <thead>
        <tr>
           <th>Title</th> 
          <th>Author</th>
          <th>Summary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {book?.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.summary}</td>
            <button className='delete-button' onClick={()=>{deleteBook((item?._id))}}>Delete</button>
            <button className='update-button' onClick={()=>{updateBook((item?._id))}}>Update</button>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table