import React from 'react';
import './styles.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='Woodland Hills'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
