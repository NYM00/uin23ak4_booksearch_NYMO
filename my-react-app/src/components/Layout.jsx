import React from 'react';
import SearchResults from './SearchResults';

const Layout = ({ children, handleSearch, searchTerm, searchResults }) => {
  return (
    <div className="layout">
      <header>
        <h1>Book Search</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={() => handleSearch(searchTerm)}>Search</button>
        </div>
      </header>
      <main>
        {searchResults && searchResults.length > 0 ? (
          <SearchResults searchResults={searchResults} />
        ) : (
          <div className="no-results">No results found.</div>
        )}
        {children}
      </main>
    </div>
  );
};

export default Layout;