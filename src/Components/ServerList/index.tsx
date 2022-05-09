import React from 'react';
import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
        <ServerButton isHome/>

        <Separator/>

        <ServerButton mentions={999}/>
        <ServerButton mentions={17}/>
        <ServerButton hasNotifications mentions={2}/>
        <ServerButton mentions={800}/>
        <ServerButton mentions={6}/>
        <ServerButton hasNotifications mentions={23}/>
        <ServerButton mentions={444}/>
        <ServerButton hasNotifications/>
        <ServerButton/>
        <ServerButton mentions={66}/>
        <ServerButton hasNotifications/>

      </Container>
  );
}

export default ServerList;