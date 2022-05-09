import styled from 'styled-components';

import { FaHashtag } from 'react-icons/fa';

export const Container = styled.div`
    grid-area: CI;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 17px;
    background: ${props => props.theme.colors.tertiary};
    box-shadow: ${props => props.theme.colors.row} 0px 1px 0px 0px;
    z-index: 2;
`;
export const HashtagIcon = styled(FaHashtag)`
    color: ${props => props.theme.colors.senary};
    margin-right: 5px;
`;


export const Title = styled.h1`
    color: ${props => props.theme.colors.senary};
    margin-right: 9px;
    font-weight: bold;
    font-size: 1rem;
`;


export const Separator = styled.div`
    height: 24px;
    width: 1px;
    background: ${props => props.theme.colors.senary};
    opacity: 0.2;
    margin: 0 13px;
`;


export const Description = styled.span`
    color: ${props => props.theme.colors.senary};
    font-size: 15px;
    color: ${props => props.theme.colors.senary};
    opacity: 0.7;
`;
export const Content = styled.div`
display: flex;
align-items: center;

`;
export const ContentSwitchArea = styled.div`
`;

