// components/Favorites.js
import { useState } from 'react';
import './Favorites.css';

const Favorites = ({ favorites, fetchWeather, addFavorite, removeFavorite }) => {
  const [newFavorite, setNewFavorite] = useState('');

  const handleAddFavorite = () => {
    if (newFavorite.trim()) {
      addFavorite(newFavorite.trim());
      setNewFavorite('');
    }
  };

  return (
    <div className="favorites">
      <h3 style={{marginRight: "80px"}}>Favorites</h3>
      <div className="add-favorite">
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Enter city name"
          className="add-favorite-input"
        />
        <button onClick={handleAddFavorite} className="add-favorite-button">
          Add
        </button>
      </div>
      <div className="favorites-list">
        {favorites.map((fav) => (
          <div key={fav.id} className="favorite-card">
            <span onClick={() => fetchWeather(fav.city)}>{fav.city}</span>
            <button onClick={() => removeFavorite(fav.id)} className="remove-favorite-button">
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;