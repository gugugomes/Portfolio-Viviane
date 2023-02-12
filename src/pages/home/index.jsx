import { Container, Content, About, Tecnologias } from "./style.js";

import { Menu } from "../../components/Menu";
import { Button } from "../../components/Button";

import fIcon from "/public/figmaIcon.svg";
import hIcon from "/public/htmlIcon.svg";
import cIcon from "/public/CssIcon.svg";
import jIcon from "/public/JavascripIcon.svg";
import rIcon from "/public/React.svg";
import gIcon from "/public/GitIcon.svg";
import { LanguageBTN } from "../../components/LanguageBTN/index.jsx";

export function Home() {
  return (
    <Container>
      <Menu />
      <Content>
        <header>
          <LanguageBTN />
          <h1>Viviane Castilho</h1>
          <p>I'm a Web Developer</p>
        </header>

        <About>
          <p>
            Sou Viviane Gomes Castilho, brasileira do interior de Goiás, sou
            casada e tenho 2 filhos lindos. Estou cursando o Tecnólogo Superior
            de Desenvolvimento Web pela Unopar, fiz vários cursos pela Udemy e
            atualmente estou em busca da minha primeira oportunidade como
            desencolvedora front-end ou UI/UX Design. <br />
            <br /> Tenho alguns projetos desenvolvidos como freelancer. Sou
            determinada, criativa, tenho facilidade de trabalhar em equipe,
            sempre buscando meu crescimento pessoal e profissional, contribuindo
            com o meu melhor para a empresa.
          </p>
          <h2>Conhecimento</h2>
          <Tecnologias>
            <li>
              UI/UX Design <img src={fIcon} alt="Figma Logo" />
            </li>
            <li>
              HTML <img src={hIcon} alt="HTML Logo" />
            </li>
            <li>
              CSS <img src={cIcon} alt="CSS Logo" />
            </li>
            <li>
              JavaScript <img src={jIcon} alt="JavaScript Logo" />
            </li>
            <li>
              ReactJs <img src={rIcon} alt="React Logo" />
            </li>
            <li>
              Git/Github <img src={gIcon} alt="GitHub Icon" />
            </li>
          </Tecnologias>
        </About>

        <Button title="Download CV" />
      </Content>
    </Container>
  );
}
