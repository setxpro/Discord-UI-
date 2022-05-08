import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh; // only view
    transition: all 1s ease;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.senary};
`;
