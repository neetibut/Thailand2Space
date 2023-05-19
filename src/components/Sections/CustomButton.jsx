import React, { useContext } from 'react';
import ButtonStateContext from '../../context/ButtonStateContext';

const CustomButton = () => {
  const { languageIs, toggleButtonState } = useContext(ButtonStateContext);

  const buttonText = languageIs === 'en' ? '🇬🇧' : '🇹🇭';
  return (
  <div>
    <button onClick={toggleButtonState}>{buttonText}</button>
  </div>
  )
}

export default CustomButton;
