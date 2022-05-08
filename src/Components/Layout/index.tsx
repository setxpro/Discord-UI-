import React from 'react';
import { Container } from './styles';

interface LayoutProps {
    children: JSX.Element;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => <Container>{children}</Container>;