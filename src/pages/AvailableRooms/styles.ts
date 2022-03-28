import styled from 'styled-components';

export const Container = styled.div`
    .top {
        text-align: center;
        padding: 32px;
    }
`;

export const GridRooms = styled.div`
    margin: 0 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
`;

export const Grid = styled.div`
    /* border: 1px solid var(--gray); */
    border-radius: 4px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 1);
    padding: 12px;
    transition: box-shadow 0.2s;

    &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 4px var(--pink);
        color: var(--pink);
    }
`;

export const NameRoom = styled.span``;