import { useState } from 'react';
import './Search.css';

const Search = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    fetchWeather(city);
    localStorage.setItem('lastSearchedCity', city);
    setCity('');
  };

  return (
    <div className="search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      </div>
  );
};

export default Search;