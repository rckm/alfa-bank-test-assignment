import styled from "styled-components";

export const List = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
`;

export const ListItem = styled.div`
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  background-color: white;
`;

export const ListAvatar = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const ListInfo = styled.div`
  padding: 20px;
  width: 100%;
`;
