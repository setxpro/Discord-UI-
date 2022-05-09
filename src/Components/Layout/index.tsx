import React from 'react';
import ChannelInfo from '../ChannelInfo';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
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
        </Container>
    )
}