// Play.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAddOnsContext } from '../../context/AddOnsContext';

const Play = () => {
  const { getRandomSkill, stopGame } = useAddOnsContext();
  const [randomSkills, setRandomSkills] = useState([]);

  const handleAddOnSkill = () => {
    const newRandomSkill = getRandomSkill();
    setRandomSkills((prevSkills) => [...prevSkills, newRandomSkill]);
  };

  return (
    <>
      {randomSkills.map((skill, index) => (
        <Typography key={index} variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
          {skill}
        </Typography>
      ))}
      <Button variant="contained" onClick={handleAddOnSkill}>
        Add On Skill
      </Button>
      <Button variant="contained" onClick={stopGame}>
        Restart Game
      </Button>
    </>
  );
};

export default Play;
