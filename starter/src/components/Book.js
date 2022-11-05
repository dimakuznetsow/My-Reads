import React, { useEffect, useState } from "react";

const Book = (props) => {
  const [shelfName, setShelfName] = useState(props.shelf);

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.image})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={shelfName}
              onChange={(event) =>
                props.updateShelfs(props.book, event.target.value)
              }
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.author}</div>
      </div>
    </li>
  );
};

export default Book;
