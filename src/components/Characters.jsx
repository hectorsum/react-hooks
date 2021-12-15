import React, { useState, useEffect, useReducer, useMemo } from 'react';

const initialState = {
  favorites: []
}
const favoriteReducer = (state,action) => {
  switch(action.type){
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  console.log(characters)
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const filteredCharacters = useMemo(() => 
    characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
  , [characters, search])
  

  const handleSearch = (e) => setSearch(e.target.value)
  
  const handleClick = (favorite) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite
    })
  }

  return (
    <div className="Characters">
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}
      <input type='text' value={search} onChange={handleSearch}/>
      {filteredCharacters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>Add To Favorites</button>
        </div>
      ))}
    </div>
  );
}

export default Characters;