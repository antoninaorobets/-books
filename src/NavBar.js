import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return <div>
      <Link to='/new'>Add Book</Link>
      <br></br>
      <Link to='/'>All Books</Link>
  </div>;
}

export default NavBar;
