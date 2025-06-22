import { useState, useContext } from "react";
import { BooksContext } from "../context/BooksContext.jsx";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { books, setBooks } = useContext(BooksContext);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!title.trim() || !author.trim()) {
      alert("Both fields are required.");
      return;
    }
    setBooks([...books, { title, author, read: false }]);
    navigate("/");
  };

  return (
    <div className="form">
      <h2 className="title">➕ Add a Book</h2>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <button onClick={handleAdd}>Add Book</button>
    </div>
  );
}


