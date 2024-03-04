import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useAddOnsContext } from '../../context/AddOnsContext';

const levels = {
  1: {
    Front: ["Front Walkover", "Forward Roll", "Handstand", "Handstand Forward Roll"],
    Transition: ["Cartwheel", "Round Off"],
    Back: ["Back Walkover", "Backward Roll"]
  },
  2: {
    Front: ["Front Handspring", "Dive Roll"],
    Transition: [],
    Back: ["Back Handspring"]
  },
  3: {
    Front: ["Front Sault"],
    Transition: ["Aerial", "Round Off Back Tuck"],
    Back: ["Multiple Back Handsprings"]
  }
};

const Setup = () => {
  const [level, setLevel] = useState('');
  const [chaosMode, setChaosMode] = useState(false); // New state for chaosMode
  const { skillList, updateSkillList, startGame, setChaosMode: setContextChaosMode } = useAddOnsContext();

  const handleLevelChange = (event) => {
    const selectedLevel = event.target.value;
    setLevel(selectedLevel);

    // Combine skills from all levels up to the selected one
    let combinedSkills = { Front: [], Transition: [], Back: [] };
    for (let i = 1; i <= selectedLevel; i++) {
      combinedSkills.Front.push(...levels[i].Front);
      combinedSkills.Transition.push(...levels[i].Transition);
      combinedSkills.Back.push(...levels[i].Back);
    }
    updateSkillList(combinedSkills);
  };

  const handleChaosModeChange = (event) => {
    const isChaosMode = event.target.checked;
    setChaosMode(isChaosMode);
    setContextChaosMode(isChaosMode); // Update chaosMode in context
  };

  const handleStartGame = () => {
    startGame();
    // Any other logic you want to perform when starting the game
  };

  return (
    <>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
        Choose a level:
      </Typography>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            id="select-level"
            value={level}
            onChange={handleLevelChange}
          >
            <MenuItem value="" disabled>
              Choose a level
            </MenuItem>
            <MenuItem value={1}>Level 1</MenuItem>
            <MenuItem value={2}>Level 2</MenuItem>
            <MenuItem value={3}>Level 3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
        Skills included:
      </Typography>
      {Object.keys(skillList).map((category) => (
        <React.Fragment key={category}>
          <Typography variant="subtitle1">{category}:</Typography>
          <ul>
            {skillList[category].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}

      <FormGroup>
        <FormControlLabel
          control={<Switch checked={chaosMode} onChange={handleChaosModeChange} />}
          label="Chaos Mode"
        />
      </FormGroup>

      <Button variant="contained" onClick={handleStartGame}>
        Start Game
      </Button>
    </>
  );
};

export default Setup;
