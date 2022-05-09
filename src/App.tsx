import React, { useContext } from 'react';

import usePersistedState from './utils/usePersistedState';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from './styles/theme/light';
import dark from './styles/theme/dark';
import { Layout } from './Components/Layout';

const App: React.FC = () => {

  // initial State
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
          <Layout toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;