import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?title=james+bond${searchTerm}`);
        const data = await response.json();
        console.log('API response:', data); // Logger responsen for å se om jeg får hentet ut API-et
        setSearchResults(data.docs);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  console.log('Search results:', searchResults); // Logger søkeresultatene.

  return (
    <Layout
      handleSearch={setSearchTerm}
      searchTerm={searchTerm}
      searchResults={searchResults}
    />
  );
}

export default App;
