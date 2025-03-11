import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h1>📚 Book Store</h1>
      <AddBookForm fetchBooks={fetchBooks} />
      <BookList books={books} fetchBooks={fetchBooks} />
    </div>
  );
};

export default App;
