import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  padding: 0.7rem 1.5rem;

  background-color: var(--purple-900); 
  color: var(--font-white);
 
  boder: nome;
  boder-radius: 0.2rem;
  
  transition: 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`