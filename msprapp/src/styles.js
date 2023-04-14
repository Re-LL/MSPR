import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

export const MainButton = styled.button`
  background-color: #90ee90; // Vert clair
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #7cdb7f;
  }
`;

export const NavLink = styled.a`
  color: #90ee90; // Vert clair
  text-decoration: none;
  margin: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
