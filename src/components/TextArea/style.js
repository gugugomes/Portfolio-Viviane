import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 120px;

  background-color: transparent;
  color: ${({ theme }) => theme.Colors.White};

  resize: none;
  border: 1px solid ${({ theme }) => theme.Colors.Gray};

  padding: 15px 0 0 20px;

  border-radius: 5px;

  &::placeholder {
    color: ${({ theme }) => theme.Colors.Gray};

    font-family: ${({ theme }) => theme.Fonts.MainTextFont};
  }
`;
