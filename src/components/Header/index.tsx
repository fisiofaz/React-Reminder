import RRLogo from "../../assets/images/RRLogo.png"
import { Container } from "./styles";
import { Button } from "../Button";
import { useState } from "react";


export function Header() {
  const [number, setNumber] = useState(0);
  function increment() {
    setNumber(number + 1);
  }
  return (
    <Container>
      <img src= {RRLogo} alt="React Reminder Logo" />
      <p>{number}</p>
      <Button title="Adicionar Lembrete" onClick= {increment} />
    </Container>
  ); 
}
