import React from "react";
import axios from "axios";

const BookList = ({ books, fetchBooks }) => {
  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2>📖 Book List</h2>
      {books.map((book) => (
        <div key={book._id} className="book-item">
          <div>
            <h3>{book.title}</h3>
            <p>👤 {book.author}</p>
            <p>💰 ${book.price}</p>
          </div>
          <button onClick={() => deleteBook(book._id)} className="delete-btn">
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
