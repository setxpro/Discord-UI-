import styled from 'styled-components';

export const Container = styled.div`
    height: 60px;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    transition: all 1s ease;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.senary};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
`;
