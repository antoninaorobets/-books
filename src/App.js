import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"
import BookList from './BookList';
import BookForm from './BookForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';

function App() {
  const [books, setBooks]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/books")
    .then(r=>r.json())
    .then(data=>setBooks(data))
  },[])

  const addBook = (book) => {
    setBooks([...books,book])
  }

  const onDelete = (id) => {
    setBooks(books.filter(book=>book.id !== id))
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/new' element={ 
             <BookForm addBook={addBook} />
             } />

        <Route path='/' element={ 
              <BookList books={books} onDelete={onDelete}/> 
              } />
      </Routes>
    </div>
  );
}



export default App;
