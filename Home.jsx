import { useContext } from "react";
import { BooksContext } from "../context/BooksContext.jsx";
import BookCard from "../components/BookCard.jsx";

export default function Home() {
  const { books } = useContext(BooksContext);

  return (
    <div>
      <h2 className="title">📚 Your Books</h2>

      {books.length === 0 ? (
        <p className="center-text">No books added yet 📖</p>
      ) : (
        <div className="book-list">
          {books.map((book, i) => (
            <BookCard key={i} book={book} index={i} />
          ))}
        </div>
      )}

      {books.length > 0 && books.every(b => b.read) && (
        <p className="center-text success">
          ✅ You’ve read all your books!
        </p>
      )}
    </div>
  );
}

