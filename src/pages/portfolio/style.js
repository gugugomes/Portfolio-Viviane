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

  position: relative;

  display: grid;
  grid-template-areas:
    "header"
    "portfolio";
  align-items: center;

  > header {
    grid-area: header;

    h1 {
      font-family: ${({ theme }) => theme.Fonts.TitleFont};
      font-size: 60px;
      font-weight: 600;

      border-bottom: 1px dashed ${({ theme }) => theme.Colors.Gray};
      padding-bottom: 22px;
    }
  }

  > section {
    display: flex;
    //flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    div {
      width: 300px;
      height: 300px;

      background: ${({ theme }) => theme.Colors.White};
    }
  }
`;

export { Container, Content };
