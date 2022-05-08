import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface HeaderProps {
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

  return (
      <Container>
          <h3>Header</h3>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.quaternary}
            />
      </Container>
  );
}

export default Header;