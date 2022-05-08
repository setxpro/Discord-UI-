import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import { Container } from './styles';


export const Layout = () => {
    return (
        <Container>
            <ServerList/>
            <ServerName/>
        </Container>
    )
}