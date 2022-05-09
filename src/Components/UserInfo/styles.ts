import styled from 'styled-components';

import { BsMicFill } from 'react-icons/bs';
import { MdHeadset } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

export const Container = styled.div`
    grid-area: UI;
    background: ${props => props.theme.colors.secondary};
    box-shadow: ${props => props.theme.colors.row} 0px 0px 3px 0px;

    display: flex;
    align-items: center;
    padding: 0 10px;
`;

export const ContentImage = styled.div`
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
`;
export const ContentInfoName = styled.div`
    margin-left: 10px;
    h2 {
        font-size: 13px;
        font-weight: 700;
        color: ${props => props.theme.colors.text};
    }
    span {
        font-size: 13px;
        font-weight: 400;
        color: ${props => props.theme.colors.senary};
        opacity: .8;
    }
`;
export const ContentActionsServer = styled.div`
    display: flex;
    margin-left: 15px;
    gap: .5rem;
`;

// Icons

export const MicIcon = styled(BsMicFill)`
    font-size: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme.colors.senary};
    opacity: 0.5;
`;
export const HeadSetIcon = styled(MdHeadset)`
    font-size: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme.colors.senary};
    opacity: 0.5;
`;
export const SettingsInfoIcon = styled(IoMdSettings)`
    font-size: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme.colors.senary};
    opacity: 0.5;
`;
