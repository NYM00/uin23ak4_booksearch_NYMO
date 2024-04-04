import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';
import '../styles/Style.css';

const Layout = ({ searchResults }) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Oppdaterer filteredResults når searchResults eller searchTerm endres
    if (!searchTerm) {
      setFilteredResults(searchResults);
    } else {
      const filtered = searchResults.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredResults(filtered);
    }
  }, [searchResults, searchTerm]);

  const handleSearch = () => {
  };

  return (
    <div className="layout">
      <header>
        <h1>Book Search</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search in our library..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <main>
        <SearchResults searchResults={filteredResults} />
      </main>
    </div>
  );
};

export default Layout;
