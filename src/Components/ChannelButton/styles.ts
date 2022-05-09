import styled from 'styled-components';

import { FaHashtag } from 'react-icons/fa';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 32px;
    padding: 0 10px;
    border-radius: 3px;

    &:hover {
        background: ${props => props.theme.colors.quinary};
        p {
            color: ${props => props.theme.colors.text};
            opacity: 1;
        }
    }  
    
`;

export const ContentHashAndName = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    p {
        font-size: 1rem;
        color: ${props => props.theme.colors.senary};
        opacity: 0.8;
    }
`;
export const ContentActions = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const HashtagChannelIcon = styled(FaHashtag)`
    font-size: 1rem;
    color: ${props => props.theme.colors.senary};
    opacity: 0.8;
`;

export const AddUserIcon = styled(MdPersonAddAlt1)<{toggle:boolean}>`
    font-size: 1rem;
    cursor: pointer;
    color: ${props => props.theme.colors.senary};
    opacity: 0.8;

    display: ${props => props.toggle ? 'inline' : 'none'};
  
`;

export const SettingsIcon = styled(AiFillSetting)<{toggle:boolean}>`
    font-size: 1rem;
    cursor: pointer;
    color: ${props => props.theme.colors.senary};
    opacity: 0.8;
    display: ${props => props.toggle ? 'inline' : 'none'};

`;
