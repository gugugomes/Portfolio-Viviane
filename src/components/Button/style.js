import styled from "styled-components";

export const Container = styled.button`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #2c2d2f;

  border: 1px solid #696969;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 200px;
  height: 60px;

  padding: 19px 40px;

  color: ${({ theme }) => theme.Colors.White};
`;
