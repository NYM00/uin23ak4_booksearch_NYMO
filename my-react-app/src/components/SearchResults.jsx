import React from 'react';
import BookCard from './BookCard';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      ) : (
        <div>No results found...</div>
      )}
    </div>
  );
};

export default SearchResults;
