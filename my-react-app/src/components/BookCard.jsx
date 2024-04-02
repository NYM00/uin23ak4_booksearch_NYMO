import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Published Year: {book.publishedYear}</p>
      <p>Average Rating: {book.averageRating}</p>
      <a href={`https://www.amazon.com/s?k=${book.amazonId}`} target="_blank" rel="noopener noreferrer">Search on Amazon</a>
    </div>
  );
};

export default BookCard;
