import styled from 'styled-components';

export const Container = styled.div`
    grid-area: SL;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${props => props.theme.colors.primary};

    padding: 11px 0;

    max-height: 100vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid ${props => props.theme.colors.secondary};

    margin-bottom: 8px;
`;

