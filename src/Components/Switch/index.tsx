import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { ToggleThemeContext } from '../Context/ToggleThemeContext';


const SwitchToggleTheme: React.FC = () => {

    const { colors, title } = useContext(ThemeContext);
    const { toggleTheme } = useContext(ToggleThemeContext);

  return (
    <>
        <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.secondary}
            onColor={colors.secondary}
        />
     </>
  );
}

export default SwitchToggleTheme;