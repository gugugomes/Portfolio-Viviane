import styled from "styled-components";
import { Link } from "react-router-dom";

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
    border-top: 1px solid ${({ theme }) => theme.Colors.TitleColor};
  
    padding: 16px 52px;
  }
  
  .Nav:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.Colors.TitleColor};
  }
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

const PathLink = styled(Link)`
  font-family: ${({ theme }) => theme.Fonts.MainTextFont};
  font-weight: 400;
  font-size: 16px;

  text-transform: uppercase;

  color: ${({ theme }) => theme.Colors.Gray};
`;

export { Container, Content, Footer, PathLink };
