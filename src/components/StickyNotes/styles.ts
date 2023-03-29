import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;

width: 100%;

.reminderTitle (
  

   align-items: center; 
   justify-content: center;
  
   margim 7rem 0;

  > h1 {
    color: var(--purple-600);
    font-family: "Inter";
  }
)
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 1.5rem;
grid-column-gap: 2.5rem;

width: 90%;

> div {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 15rem;

  gap: 1rem;
  padding: 1rem;

  background-color: var(--purple-300);
  border-radius: 0.4rem;
  > h1 {
    color: var(--font-black);
    font-family: "inter";
  }
  
  > p {
    font-family: "Roboto";
    width: 90%;

    overflow: auto;
    text-align: center;
    word-break: break-all;

    ::-webkit-scrollbar {
      display: nome;
    }
  }
}
`;