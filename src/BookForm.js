import React, { useState } from 'react';

function BookForm({ addBook }) {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

    }
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3000/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then((data) => {
                addBook(data)
                setFormData ({
                    title: "",
                    author: "",
                })
            })
            
    }

    return <div>
        <form onSubmit={handleSubmit} >
            <label>Book Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} ></input>
            <label>Book Author:</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    </div>;
}

export default BookForm;
