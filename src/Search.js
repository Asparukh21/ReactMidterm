import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
