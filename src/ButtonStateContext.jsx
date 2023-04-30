import { createContext } from 'react';

const ButtonStateContext = createContext({
  languageIs: 'en',
  toggleButtonState: () => {},
});

export default ButtonStateContext;
