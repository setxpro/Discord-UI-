import React from 'react';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import UserInfo from '../UserInfo';
import { Container } from './styles';

interface Props {
    toggleTheme: () => void;
}

export const Layout = ( { toggleTheme }: Props ) => {
    return (
        <Container>
            <ServerList/>
            <ServerName/>
            <ChannelInfo toggleTheme={toggleTheme}/>
            <ChannelList/>
            <UserInfo/>
        </Container>
    )
}