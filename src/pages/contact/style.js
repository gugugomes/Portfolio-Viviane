import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 260px auto;
  grid-template-areas: "menu content";
`;

const Content = styled.div`
  grid-area: content;
  width: 100%;

  display: grid;
  grid-template-areas:
    "header"
    "form"
    "button"
    "mail";
  grid-template-rows: auto 434px auto auto;

  //justify-content: center;
  align-items: center;

  > header {
    width: 100%;
    grid-area: header;

    border-bottom: 1px dashed ${({ theme }) => theme.Colors.Gray};
    padding-bottom: 50px;

    h1 {
      font-family: ${({ theme }) => theme.Fonts.TitleFont};
      font-size: 60px;
      font-weight: 600;
    }
  }

  > form {
    width: 800px;

    justify-self: center;

    display: flex;
    flex-direction: column;
    align-content: space-between;

    gap: 40px;

    input {
      height: 50px;
      padding-left: 20px;

      background: transparent;

      color: ${({ theme }) => theme.Colors.White};

      border: 1px solid ${({ theme }) => theme.Colors.Gray};
      border-radius: 5px;
    }
  }

  > button {
    background: transparent;
    box-shadow: none;

    justify-self: center;
  }

  > footer {
    display: flex;
    justify-content: space-evenly;
  }
`;

export { Container, Content };
