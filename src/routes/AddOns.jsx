import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

const AddOns = () => {
  const [level, setLevel ] = useState(1);

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center', mb: 2 }}>
        Add Ons
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
        Choose a level:
      </Typography>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            id="select-level"
            value={level}
            onChange={handleChange}
          >
            <MenuItem value={1}>Level 1</MenuItem>
            <MenuItem value={2}>Level 2</MenuItem>
            <MenuItem value={3}>Level 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  )
}

export default AddOns