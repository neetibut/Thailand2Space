import React, { useContext } from 'react';
import ButtonStateContext from '../ButtonStateContext';

const CustomButton = () => {
  const { languageIs, toggleButtonState } = useContext(ButtonStateContext);

  const buttonText = languageIs === 'en' ? 'Switch to Thai' : 'เปลี่ยนเป็นภาษาอังกฤษ';

  return <button onClick={toggleButtonState}>{buttonText}</button>;
};

export default CustomButton;
