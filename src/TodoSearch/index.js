import React from 'react';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => { 
    setSearchValue(event.target.value); 
  };

  return (
    <input
      id="TodoSearch"
      className="TodoSearch"
      placeholder="Buscar To Do's"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };