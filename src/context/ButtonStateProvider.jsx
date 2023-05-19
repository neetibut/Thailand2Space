import React, { useState } from 'react';
import ButtonStateContext from './ButtonStateContext';

const ButtonStateProvider = ({ children }) => {
  const [languageIs, setLanguageIs] = useState('en');

  const toggleButtonState = () => {
    setLanguageIs(languageIs === 'en' ? 'th': 'en');
  };

  return (
    <ButtonStateContext.Provider value={{ languageIs, toggleButtonState }}>
      {children}
    </ButtonStateContext.Provider>
  );
};

export default ButtonStateProvider;
