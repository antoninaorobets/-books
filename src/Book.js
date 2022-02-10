import React from "react";

function Book({book, onDelete}) {
    const handleDelete = (event)=> {
        fetch(`http://localhost:3000/books/${book.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
              },
        })
        .then(r=>r.json())
        .then(()=>onDelete(book.id))
    }

  return <div>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <button onClick={handleDelete} >Delete</button>
  </div>;
}

export default Book;
