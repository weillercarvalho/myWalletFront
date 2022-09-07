import React from "react";
import styled from "styled-components";
import wallet from "../assets/images/MyWallet.png";
export default function SingIn() {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <>
      <Father>
        <img src={wallet} alt="" />
        <form onSubmit={handleForm}>
          <input type="email" placeholder="E-mail" name="email"></input>
          <input type="password" placeholder="Senha" name="senha"></input>
          <button>Entrar</button>
        </form>
        <p>Primeira vez? Cadastre-se!</p>
      </Father>
    </>
  );
}
const Father = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  width: 100%;
  img {
    margin: 159px auto 24px auto;
  }
  input {
    width: 80%;
    height: 58px;
    margin-bottom: 13px;
    ::placeholder {
      font-family: "Raleway", sans-serif;
      color: var(--color-placeholder);
      font-weight: 400;
      font-size: 20px;
    }
  }
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  button {
    background-color: var(--color-button);
    width: 80%;
    height: 46px;
    border-radius: 5px;
    color: var(--color-letters);
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 20px;
    border: none;
  }
  p {
    color: var(--color-letters);
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin: 36px auto auto auto;
  }
`;
