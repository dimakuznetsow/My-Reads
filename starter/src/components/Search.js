import React, { useEffect, useState } from "react";
import * as Books from "../BooksAPI.js";
import Book from "./Book.js";

const Search = (props) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [input, setInput] = useState({ textInput: "" });

  useEffect(() => {
    const promise1 = Promise.resolve(Books.search(input.textInput, 10));

    promise1.then((value) => {
      if (value?.length) {
        setSearchedBooks(value);
      } else {
        setSearchedBooks([]);
      }
    });
  }, [input.textInput]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  const booksInSearch = searchedBooks?.map((book) => {
    return (
      <Book
        key={book.id}
        book={book}
        id={book.id}
        image={book.imageLinks?.thumbnail}
        title={book.title}
        author={book.authors}
        updateShelfs={props.updateShelfs}
      />
    );
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => props.closeSearch()}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            name="textInput"
            value={input.textInput}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{booksInSearch}</ol>
      </div>
    </div>
  );
};

export default Search;
