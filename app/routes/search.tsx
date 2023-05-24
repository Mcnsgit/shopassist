// app/routes/search.tsx

import { useRouteLoaderData } from "@remix-run/react";
import { SetStateAction, useState } from 'react';

export let loader = async () => {
  // Load data for your search route here
  return {};
};


export default function Search(...args: [] | [] | []) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      // Fetch search results from your backend
      const response = await fetch(`/api/search?term=${encodeURIComponent(searchTerm)}`);

      if (!response.ok) {
        throw new Error('Search failed. Please try again.');
      }

      const data = await response.json();

      setResults(data);
    } catch (error) {
      setError(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Search Products</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter product name" />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {results.length === 0 && !isLoading && <p>No results found.</p>}
      {results.map(product => (
        <div key={product}>
          <h3>{product}</h3>
          <p>{product}</p>
        </div>
      ))}
    </div>
  );
}
