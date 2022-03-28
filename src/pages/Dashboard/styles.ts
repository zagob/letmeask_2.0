import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  padding: 32px;
  margin: 0 auto;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background: none;

    svg {
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: var(--pink);
      }
    }
  }
  img {
    border-radius: 50px;
    width: 80px;
    height: 80px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Main = styled.main`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 0.5fr;
`;

export const ListRoomOpen = styled.main`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;

  h2 {
    text-transform: uppercase;
    color: var(--pink);
    font-weight: 400;
  }
`;

export const ListRoomClose = styled.main`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  h2 {
    margin-bottom: 10px;
    
    text-transform: uppercase;
    color: red;
    font-weight: 400;
  }
`;

export const Rooms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  padding: 12px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 4px var(--pink);
    color: var(--pink);
  }

  svg {
    &:first-child: {
      color: red;
    }
    transition: 0.2s;
    &:hover {
    }
  }
`;
