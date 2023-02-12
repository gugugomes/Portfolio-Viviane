import { Container } from "./style";

import bIcon from "../../../public/brasil.png";

import { AiOutlineArrowDown } from "react-icons/ai";

export function LanguageBTN() {
  return (
    <Container>
      <img src={bIcon} alt="Bandeira do Brasil" />
      <AiOutlineArrowDown />
    </Container>
  );
}
