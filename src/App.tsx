import React from 'react';

import usePersistedState from './utils/usePersistedState';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from './styles/theme/light';
import dark from './styles/theme/dark';
import Header from './Components/Header';
import { Layout } from './Components/Layout';

const App: React.FC = () => {

  // initial State
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      {/* <Header toggleTheme={toggleTheme}/> */}
      <Layout/>
    </ThemeProvider>
  );
}

export default App;