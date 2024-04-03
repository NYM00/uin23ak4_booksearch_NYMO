import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const jamesBondApiUrl = 'https://openlibrary.org/search.json?q=james+bond';

  useEffect(() => {
    // Gjør API-kall for James Bond-bøker ved oppstart
    fetch(jamesBondApiUrl)
      .then(response => response.json())
      .then(data => setSearchResults(data.docs))
      .catch(error => console.error('Error fetching results:', error));
  }, []);

  const handleSearch = async (query) => {
    setSearchTerm(query);
    if (query.length >= 3) {
      try {
        // Gjør API-kall og oppdaterer searchResults-state med resultatene
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
