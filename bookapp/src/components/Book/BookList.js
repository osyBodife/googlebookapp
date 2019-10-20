import React from "react";
import BookCard from "./BookCard";
import "./styles.css";

function BookList(props) {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={book.id}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors[i]}
            description={book.volumeInfo.description}
            //console.log(data.body.items);
            //console.log(data.body.items[0].volumeInfo.title);
            //console.log(data.body.items[0].volumeInfo.authors[0]);
            //console.log(data.body.items[0].volumeInfo.description);
            //console.log(data.body.items[0].volumeInfo.imageLinks.thumbnail);
          />
        );
      })}
    </div>
  );
}

export default BookList;
