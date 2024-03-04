import React, { createContext, useContext, useState } from 'react';

const AddOnsContext = createContext();

export const AddOnsProvider = ({ children }) => {
  const [skillList, setSkillList] = useState({});
  const [inProgress, setInProgress] = useState(false);
  const [chaosMode, setChaosMode] = useState(false);

  const updateSkillList = (newSkillList) => {
    setSkillList(newSkillList);
  };

  const startGame = () => {
    setInProgress(true);
  };

  const stopGame = () => {
    setSkillList({});
    setInProgress(false);
  }

  const getRandomSkill = () => {
    const allSkills = Object.values(skillList).reduce((acc, curr) => [...acc, ...curr], []);
    const randomIndex = Math.floor(Math.random() * allSkills.length);
    return allSkills[randomIndex];
  };

  const setChaosModeValue = (value) => {
    setChaosMode(value);
  };

  const contextValue = {
    skillList,
    updateSkillList,
    inProgress,
    getRandomSkill,
    setChaosMode: setChaosModeValue, // Add this to context value
    startGame,
    stopGame,
  };

  return (
    <AddOnsContext.Provider value={contextValue}>
      {children}
    </AddOnsContext.Provider>
  );
};

export const useAddOnsContext = () => {
  const context = useContext(AddOnsContext);
  if (!context) {
    throw new Error('useAddOnsContext must be used within an AddOnsProvider');
  }
  return context;
};
