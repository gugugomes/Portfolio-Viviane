import styled from "styled-components";

export const Container = styled.button`
  margin: 0;

  position: absolute;
  top: 40px;
  right: 30px;

  display: flex;
  align-items: center;
  gap: 9px;

  width: 60px;
  height: 25px;

  border-radius: 5px;
  padding: 0 5px;

  background-color: ${({ theme }) => theme.Colors.Gray};
`;
