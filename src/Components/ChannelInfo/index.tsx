import React, { useState, useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { 
    Container, 
    HashtagIcon,
    Title,
    Separator,
    Description,
    Content,
    ContentSwitchArea
} from './styles';

interface Props {
    toggleTheme: () => void;
}

const ChannelInfo: React.FC<Props> = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

  return (
      <Container>
          <Content>
            <HashtagIcon/>
            <Title>Chat-livre</Title>
            <Separator/>
            <Description>Canal aberto para conversa</Description>
          </Content>
          <ContentSwitchArea>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                
                onColor={colors.quaternary}
                onHandleColor={colors.senary}
                
                offColor={colors.quinary}
                offHandleColor={colors.senary}
            />
          </ContentSwitchArea>
      </Container>
  );
}

export default ChannelInfo;