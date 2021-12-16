import React from 'react'

export const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div>
      <input type='text' value={search} onChange={handleSearch} ref={searchInput}/>
    </div>
  )
}
