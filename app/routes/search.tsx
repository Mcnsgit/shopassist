// app/routes/search.tsx

import { useRouteLoaderData } from "@remix-run/react";
import { useState } from 'react';

export let loader = async () => {
  // Load data for your search route here
  return {};
};

export default function Search() {
  let data = useRouteData();

  return (
    <div>
      <h2>Search Products</h2>
      {/* Display search interface here */}
    </div>
  );
}
function useRouteData() {
    throw new Error("Function not implemented.");
}

export default function Search() {
    let { register, handleSubmit } = useForm();
  
let onSubmit = data => {
    // In a real-world application, you would probably use this data to make a search request
    console.log(data);
  };

  return (
    <div>
      <h2>Search Products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("searchTerm")} placeholder="Enter search term" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
  
    const handleChange = event => {
      setSearchTerm(event.target.value);
    }
  
    const handleSubmit = async event => {
      event.preventDefault();
      
      // Fetch search results from your backend
      const response = await fetch(`/api/search?term=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
  
      setResults(data);
    }
  
    return (
      <div>
        <h2>Search Products</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={searchTerm} 
            onChange={handleChange}
            placeholder="Enter product name"
          />
          <button type="submit">Search</button>
        </form>
        {results.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
  }
  import { useState } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = async event => {
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
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h2>Search Products</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={searchTerm} 
          onChange={handleChange}
          placeholder="Enter product name"
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {results.length === 0 && !isLoading && <p>No results found.</p>}
      {results.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
