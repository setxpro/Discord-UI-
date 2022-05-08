import styled from 'styled-components';

import { MdKeyboardArrowDown } from 'react-icons/md'

export const Container = styled.div`
    grid-area: SN;
    background: ${props => props.theme.colors.secondary};

    padding: 0 11px 0 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: ${props => props.theme.colors.primary} 0px 1px 0px 0px;

    z-index: 2;
`;
export const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.senary};
`;

export const ExpandIcon = styled(MdKeyboardArrowDown)`
    color: ${props => props.theme.colors.senary};
    font-size: 1.5rem;
    cursor: pointer;
`;
