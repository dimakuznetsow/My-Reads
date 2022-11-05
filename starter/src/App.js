import "./App.css";
import { useState, useEffect } from "react";
import * as Books from "./BooksAPI.js";
import Header from "./components/Header";
import Search from "./components/Search";
import Shelf from "./components/Shelf";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [showSearchPage, setShowSearchpage] = useState(false);

  function closeSearch() {
    setShowSearchpage(!showSearchPage);
  }

  function updateShelfs(book, shelf) {
    Books.update(book, shelf).then((res) => {
      const newBook = allBooks.filter((b) => b.id !== book.id);
      if (shelf !== "none") {
        setAllBooks(newBook.concat({ ...book, shelf }));
      } else {
        setAllBooks(newBook);
      }
    });
  }

  useEffect(() => {
    const promise2 = Promise.resolve(Books.getAll());

    promise2.then((value) => {
      value.filter((book) => {
        setAllBooks((oldArray) => [...oldArray, book]);
      });
    });
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          closeSearch={closeSearch}
          updateShelfs={updateShelfs}
          allBooks={allBooks}
        />
      ) : (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <Shelf updateShelfs={updateShelfs} allBooks={allBooks} />
          </div>
          <div className="open-search">
            <a onClick={closeSearch}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
