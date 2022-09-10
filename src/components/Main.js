import React from "react";
import styled from "styled-components";
import exit from "../assets/images/Vector.png";
import plus from "../assets/images/mais2.svg"
import minus from "../assets/images/menos2.svg"
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";



export default function Main() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem(`wallet`));
  React.useEffect(() => {
    
  })
  return (
      <Father>
        <header>
          <h1>Ola, {auth.name} </h1>
          <img src={exit} alt="Exit from the program." />
        </header>
        <nav>Não há registros de entrada ou saída</nav>
        <footer>
          <section onClick={() => navigate(`/mais`)}>
            <div><img src={plus} alt="Plus the value." /></div>
            <p>Nova entrada</p>
          </section>
          <section onClick={() => navigate(`/menos`)}>
            <div><img src={minus} alt="Remove the value." /></div>
            <p>Nova saída</p>
          </section>
        </footer>
      </Father>
  );
}

const Father = styled.div`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 24px;
  }
  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: var(--color-letters);
  }
  nav {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 446px;
    background-color: var(--color-letters);
    margin: auto;
    border-radius: 5px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 16px;
    justify-content: center;
    align-items: center;
  }
  footer {
    display: flex;
    width: 90%;
    margin: 13px auto 16px auto;
  }
  section {
    width: 50%;
    height: 114px;
    background-color: var(--color-button);
    color: var(--color-letters);
    margin: 7px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: scale(0.95)
    }
  }
  p {
    margin: 31px 10px 10px 10px;
  }
  img {
    &:hover {
      cursor: pointer;
      
    }
  }
  div {
    margin: 10px;
    width:25px;
    height:25px;
  }
`;
