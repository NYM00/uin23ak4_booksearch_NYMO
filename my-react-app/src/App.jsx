import React, { useState } from 'react';
import Layout from './components/Layout';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    setSearchTerm(query);
    if (query.length >= 3) {
      // Gjør API-kall her og oppdater searchResults-state med resultatene
      try {
        const response = await fetch(`https://api.example.com/search?q=${query}`);
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Layout
      handleSearch={handleSearch}
      searchTerm={searchTerm}
      searchResults={searchResults}
    />
  );
}

export default App;
