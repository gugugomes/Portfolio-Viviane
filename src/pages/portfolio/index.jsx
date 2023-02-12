import { Container, Content } from "./style";

import { Menu } from "../../components/Menu";
import { LanguageBTN } from "../../components/LanguageBTN/index.jsx";

export function Portfolio() {
  return (
    <Container>
      <Menu />
      <Content>
        <header>
          <LanguageBTN />
          <h1>Portfolio.</h1>
        </header>
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </Content>
    </Container>
  );
}
