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
        
    } catch (error) {
        alert("error in deleting")
    }
   }

  return (
    <table>
      <thead>
        <tr>
           <th>Title</th> 
          <th>Author</th>
          <th>Summary</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {book?.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.summary}</td>
            <button className='delete-button' onClick={()=>{deleteBook((item?._id))}}>Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table