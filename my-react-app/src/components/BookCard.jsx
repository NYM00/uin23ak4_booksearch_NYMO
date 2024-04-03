import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Book cover" />
      <h2>{book.title}</h2>
      <p>Author: {book.author_name && book.author_name.join(', ')}</p>
      <p>Published Year: {book.first_publish_year}</p>
      <p>Average Rating: {book.ratings_average}</p>
      <a
        href={`https://www.amazon.com/s?k=${book.amazon_id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Search on Amazon
      </a>
    </div>
  );
};

export default BookCard;
