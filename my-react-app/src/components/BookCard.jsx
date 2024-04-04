import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Book cover" />
      <h2>{book.title}</h2>
      <p>Author: {book.author_name && book.author_name.join(', ')}</p>
      <p>Published Year: {book.first_publish_year}</p>
      <p>Average Rating: {book.ratings_average}</p>
      {book.id_amazon ? (
        <button
          onClick={() => window.open(`https://www.amazon.com/s?k=${book.id_amazon}`, '_blank')}
          className="amazon-button"
        >
          Search on Amazon
        </button>
      ) : (
        <p>Amazon link not available</p>
      )}
    </div>
  );
};

export default BookCard;
