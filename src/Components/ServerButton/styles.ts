import styled from 'styled-components';

import { ServerButtonProps } from '.';

export const Button = styled.button<ServerButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0; // OBS'
    width: 48px;
    height: 48px;
    margin-bottom: 8px;

    background: ${props => props.isHome ? 'var(--link)' : props.theme.colors.secondary};

    cursor: pointer;
    position: relative;

    img {
        width: 38px;
        height: 38px;
    }
    
    border-radius: 50%;
    transition: all 1s ease, background-color 0.2s;
    &:hover, &.active {
        border-radius: 30%;
        background: var(--link);

        &::before {
            transition: all .5s ease;
            height: 15px;
            border-radius: 30%;
        }
    }

    &::before {
        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;
        top: calc(50%-4.5px);

        background: #000; // Create DefaultTheme
        border-radius: 50%;

        content: '';

        display: ${props => props.hasNotifications ? 'inline' : 'none'};

    }
    &::after {
        background: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;
        border-radius: 16px;
        border: 4px solid ${props => props.theme.colors.primary}; // OBS'

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: #FFF;

        content: '${props => props.mentions && props.mentions }';
        display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'}
    }
`;
