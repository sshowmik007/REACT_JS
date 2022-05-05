import React, { useState } from 'react';
import { Paper,TextField } from '@mui/material';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <Paper
          component='form'
          onSubmit={onSubmit}
          sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 5,
            boxShadow: '2',
          }} >
            <TextField fullWidth label="Search" 
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            />
        </Paper>
  );
};

export default SearchBar;
