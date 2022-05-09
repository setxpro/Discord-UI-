import React from 'react';

import { 
  Container,
  ContentImage,
  ContentInfoName,
  ContentActionsServer,
  MicIcon,
  HeadSetIcon,
  SettingsInfoIcon
} from './styles';

const UserInfo: React.FC = () => {
  return (
      <Container>
          <ContentImage><img src="https://github.com/setxpro.png" alt='avatar'/></ContentImage>
          <ContentInfoName>
            <h2>Patrick Anjos</h2>
            <span>#2689</span>
          </ContentInfoName>
          <ContentActionsServer>
            <MicIcon/>
            <HeadSetIcon/>
            <SettingsInfoIcon/>
          </ContentActionsServer>
      </Container>
  );
}

export default UserInfo;