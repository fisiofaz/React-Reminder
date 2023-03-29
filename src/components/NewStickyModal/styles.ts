import styled from "styled-components";

export const Container = styled.form`
display: flex;
flex-direction: column;

align-items: center;
justify-content: space-around;

width: 40vw;
height: 80vh;

position: absolute;
top: 10%;
right: 30%

background-color: var(--font-white);

border-radius: 8px;

> div {
  whitdth: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  > input {
    heigth: 2.2rem;
  }

  > input, textarea {
    width: 100%;
    border: 1px solid #7c7c7c;
    border-radius: 0.5rem;
    padding: 04rem;
  }

  > textarea {
    max-height: 12rem;
    max-width: 100%;
    min-height: 8rem;
    min-width: 100%;
  }
}

> h1 {
  color: var(--purple-600);
  font-family: "inter";
}
`;
