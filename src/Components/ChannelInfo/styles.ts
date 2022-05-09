import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 17px;
    background: ${props => props.theme.colors.tertiary};
    box-shadow: ${props => props.theme.colors.secondary} 0px 1px 0px 0px;
    z-index: 2;
`;
export const HashtagIcon = styled.div`
    
`;


export const Title = styled.div`
    color: ${props => props.theme.colors.senary};
`;


export const Separator = styled.div`

`;


export const Description = styled.div`
    color: ${props => props.theme.colors.senary};
`;
export const Content = styled.div`
display: flex;
align-items: center;

`;
export const ContentSwitchArea = styled.div`
`;

