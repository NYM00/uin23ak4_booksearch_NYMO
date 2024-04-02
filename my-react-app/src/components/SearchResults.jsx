import React from 'react';
import BookCard from './BookCard';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default SearchResults;
