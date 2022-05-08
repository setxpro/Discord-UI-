import React from 'react';
import Main from './Components/Main';

import usePersistedState from './utils/usePersistedState';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from './styles/theme/light';
import dark from './styles/theme/dark';
import Header from './Components/Header';

const App: React.FC = () => {

  // initial State
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme}/>
      <Main/>
    </ThemeProvider>
  );
}

export default App;