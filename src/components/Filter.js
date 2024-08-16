import React from 'react';

function Filter({ onFilterChange }) {
  return (
    <div className="filter">
      <select onChange={(e) => onFilterChange('genre', e.target.value)}>
        <option value="">All Genres</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
      </select>

      <input
        type="number"
        placeholder="Year From"
        onChange={(e) => onFilterChange('yearFrom', e.target.value)}
      />
      <input
        type="number"
        placeholder="Year To"
        onChange={(e) => onFilterChange('yearTo', e.target.value)}
      />

      <input
        type="number"
        placeholder="Min Rating"
        onChange={(e) => onFilterChange('minRating', e.target.value)}
      />
    </div>
  );
}

export default Filter;
