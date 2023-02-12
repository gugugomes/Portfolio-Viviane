import { Container, Content, Footer, PathLink } from "./style";

import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

export function Menu() {
  return (
    <Container>
      <Content>
        <img src="https://cdn.discordapp.com/attachments/760135420599336971/1073969482898350171/Pic.jpg" />
        <h1>Viviane Castilho</h1>
        <div className="Nav">
          <AiOutlineHome /> <PathLink to="/">Home</PathLink>
        </div>
        <div className="Nav">
          <AiOutlineFolderOpen /> <PathLink to="portfolio">Portfolio</PathLink>
        </div>
        <div className="Nav">
          <AiOutlineMail /> <PathLink to="contact">Contact</PathLink>
        </div>
      </Content>

      <Footer>
        <div className="footerLinks">
          <li>
            <a href="#">
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineGithub />
            </a>
          </li>
        </div>
        <div className="footerDiv">
          <p>2023 Made by my son ❤️ </p>
          <p>© All Rights Reserved.</p>
        </div>
      </Footer>
    </Container>
  );
}
