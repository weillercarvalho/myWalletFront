import React from "react";
import styled from "styled-components";
import wallet from "../assets/images/MyWallet.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";
import { singup } from "../services/Services";

export default function SingUp() {
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmpassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { tokens, setTokens } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (tokens) {
      navigate(`/principal`);
    }
  },[]);

  function handleForm(e) {
    e.preventDefault();
    if (password !== confirmpassword) {
      return alert(`Senhas não coincidem.`);
    }
    const body = {
      name: name,
      email: email,
      password: password,
    };
    singup(body)
      .then((r) => {
        console.log(r);
        setPassword("");
        setConfirmpassword("");
        setName("");
        setEmail("");
        navigate(`/`);
      })
      .catch((r) => {
        console.log(r);
        setPassword("");
        setConfirmpassword("");
        setName("");
        setEmail("");
      });
  }
  return (
    <>
      <Father>
        <img src={wallet} alt="" />
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="nome"
            required
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          ></input>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="senha"
            required
          ></input>
          <input
            type="password"
            placeholder="Confirme a senha"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            name="confirmeasenha"
            required
          ></input>
          <button>Cadastrar</button>
        </form>
        <p onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</p>
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
    margin: 95px auto 28px auto;
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
    &:hover {
      cursor: pointer;
    }
  }
  p {
    color: var(--color-letters);
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 15px;
    margin: 36px auto auto auto;
    &:hover {
      cursor: pointer;
    }
  }
`;
