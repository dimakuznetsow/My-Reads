import Book from "./Book.js";

const Shelf = (props) => {
  const currentlyReading = [];
  const wantToRead = [];
  const read = [];

  props.allBooks.forEach((book) => {
    if (book.shelf === "currentlyReading") {
      currentlyReading.push(book);
    }
    if (book.shelf === "wantToRead") {
      wantToRead.push(book);
    }
    if (book.shelf === "read") {
      read.push(book);
    }
  });

  const currentlyReadingShelf = currentlyReading.map((book) => {
    return (
      <Book
        key={book.id}
        book={book}
        image={book.imageLinks.thumbnail}
        title={book.title}
        author={book.authors}
        shelf={book.shelf}
        updateShelfs={props.updateShelfs}
      />
    );
  });

  const wantToReadShelf = wantToRead.map((book) => {
    return (
      <Book
        key={book.id}
        book={book}
        image={book.imageLinks.thumbnail}
        title={book.title}
        author={book.authors}
        shelf={book.shelf}
        updateShelfs={props.updateShelfs}
      />
    );
  });

  const readShelf = read.map((book) => {
    return (
      <Book
        key={book.id}
        book={book}
        image={book.imageLinks.thumbnail}
        title={book.title}
        author={book.authors}
        shelf={book.shelf}
        updateShelfs={props.updateShelfs}
      />
    );
  });
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{currentlyReadingShelf}</ol>
      </div>
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{wantToReadShelf}</ol>
      </div>
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{readShelf}</ol>
      </div>
    </div>
  );
};

export default Shelf;
