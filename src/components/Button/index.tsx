import RRLogo from "../../assets/images/RRLogo.png"
import { Container } from "./styles";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export function Button({title, onClick}: ButtonProps) {
  return <Container onClick={onClick}>{title}</Container>;
}