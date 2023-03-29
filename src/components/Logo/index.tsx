import { Container } from "./styles";
import logoImg from "../../assets/images/RRLogo.png"

export function Logo() {
  return (
    <Container>
      <img src={logoImg} alt="" />
    </Container>
  ); 
}