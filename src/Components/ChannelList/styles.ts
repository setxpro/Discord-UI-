import styled from 'styled-components';

import { RiAddFill } from 'react-icons/ri';

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 24px 9.5px 0 16px;

    background: ${props => props.theme.colors.secondary};
`;
export const Category = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;

    > span {
        color: ${props => props.theme.colors.senary};
        font-weight: bold;
        text-transform: uppercase;
        opacity: 0.5;
    }
`;

export const AddCategoryIcon = styled(RiAddFill)`
    color: ${props => props.theme.colors.senary};
    font-size: 1.2rem;
    opacity: 0.5;
    cursor: pointer;
`;