import { useContext } from "react";
import { BooksContext } from "../context/BooksContext.jsx";
import "./BookCard.css";

export default function BookCard({ book, index }) {
  const { books, setBooks } = useContext(BooksContext);

  const toggleRead = () => {
    const updated = [...books];
    updated[index].read = !updated[index].read;
    setBooks(updated);
  };

  return (
    <div className={`card ${book.read ? "read" : ""}`}>
      <h3>{book.title}</h3>
      <p className="author">by {book.author}</p>
      <button onClick={toggleRead}>
        Mark as {book.read ? "Unread" : "Read"}
      </button>
    </div>
  );
}


