import styled from "styled-components";

const Container = styled.div`
  width: 260px;
  height: 100vh;
  
  grid-area: menu;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${({ theme }) => theme.Colors.MenuBackGround};
  }

  .Nav {
    margin: 16px 0 16px 56px;
  }
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.Colors.Gray};
`;

const Content = styled.div`
  width: 100%;

  > h1 {
    text-transform: uppercase;
    text-align: center;

    font-weight: 400;
    font-size: 20px;
    font-family: ${({ theme }) => theme.Fonts.SecondTitleFont};

    margin-top: 3px;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: left;
    p {
      font-family: ${({ theme }) => theme.Fonts.MainTextFont};
      font-weight: 400;
      font-size: 16px;

      text-transform: uppercase;

      color: ${({ theme }) => theme.Colors.Gray};
    }

    svg {
      width: 20px;
      height: 20px;

      margin-right: 10px;

      color: ${({ theme }) => theme.Colors.Gray};
    }
`;

const Footer = styled.div`
  width: 100%;

  .footerLinks {
    display: flex;
    gap: 32px;

    justify-content: center;

    margin-bottom: 37px;

    > li {
      svg {
        width: 25px;
        height: 25px;

        color: ${({ theme }) => theme.Colors.Gray};
      }
    }
  }

  .footerDiv {
    text-align: center;

    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.Colors.Gray};

    margin-bottom: 20px;

    > p:nth-child(2) {
      margin-top: 10px;
    }
  }
`;

export { Container, Line, Content, Footer };
