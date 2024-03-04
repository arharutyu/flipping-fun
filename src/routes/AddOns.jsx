import React, { useState } from 'react';

import { useAddOnsContext } from '../context/AddOnsContext';
import Setup from '../sections/add-ons/Setup';
import Play from '../sections/add-ons/Play';

import Typography from '@mui/material/Typography';


const AddOns = () => {
  const { skillList, inProgress } = useAddOnsContext();
  console.log(skillList)
  return (
    <>
      <Typography variant="h1" sx={{ textAlign: 'center', mb: 2 }}>
        Add Ons
      </Typography>
      {(!inProgress) ? (
        <Setup />
      ) : (
        <Play />
      )}
    </>
  );
};

export default AddOns;