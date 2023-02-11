import styled from "styled-components";
import bgImage from "../../../public/background.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 260px auto;
  grid-template-areas: "menu content";
`;

const Content = styled.div`
  width: 100%;

  overflow-y: auto;

  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;

  grid-area: content;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-family: ${({ theme }) => theme.Fonts.TitleFont};
    font-weight: 600;
    font-size: 60px;

    color: ${({ theme }) => theme.Colors.TitleColor};

    margin-top: 107px;
    margin-bottom: 3px;
  }

  > p {
    font-family: ${({ theme }) => theme.Fonts.SecondTitleFont};
    font-weight: 400;
    font-size: 30px;

    color: ${({ theme }) => theme.Colors.TitleColor};
  }

  > button {
    margin-bottom: 77px;
  }

  .btn {
    width: 100%;

    position: relative;
  }

  .language {
    margin: 0;

    display: flex;
    align-items: center;
    gap: 9px;

    width: 60px;
    height: 25px;

    border-radius: 5px;
    padding: 0 5px;

    background-color: ${({ theme }) => theme.Colors.Gray};

    position: relative;
    left: 525px;
    top: 125px;
  }
`;

const About = styled.div`
  width: 790px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    rgba(44, 45, 47, 0.83);
  border-radius: 5px;

  padding: 50px;
  margin-top: 40px;
  margin-bottom: 45px;

  text-align: left;

  > p {
    font-weight: 300;
    font-size: 20px;

    text-align: justify;
  }

  > h2 {
    text-align: center;

    margin-top: 29px;
    margin-bottom: 35px;

    font-family: ${({ theme }) => theme.Fonts.TitleFont};
    font-weight: 600;
    font-size: 30px;
  }
`;

const Tecnologias = styled.div`
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  > li {
    display: flex;
    flex-direction: column;

    align-items: center;

    img {
      width: 30px;
      height: 30px;

      margin-top: 10px;
    }
  }
`;

export { Container, Content, About, Tecnologias };
