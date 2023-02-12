import { Container, Content } from "./style";

import { Menu } from "../../components/Menu";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export function Contact() {
  return (
    <Container>
      <Menu />
      <Content>
        <header>
          <h1>Contact Me.</h1>
        </header>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <TextArea placeholder="Message" />
        </form>
        <Button title="Send Message" />
        <footer>
          <p>vivianegomes.dev@gmail.com</p>
          <p>Caldas Novas - Goiás/Brasil</p>
        </footer>
      </Content>
    </Container>
  );
}
