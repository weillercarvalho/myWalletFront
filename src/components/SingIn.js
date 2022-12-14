import React from "react";
import styled from "styled-components";
import wallet from "../assets/images/MyWallet.png";
import { useNavigate } from "react-router-dom";
import { singin } from "../services/Services";
import { UserContext } from "./Context";

export default function SingIn() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const { tokens } = React.useContext(UserContext);

  React.useEffect(() => {
    if (tokens) {
      navigate(`/principal`);
    }
  },[]);

  function handleForm(e) {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    singin(body)
      .then((r) => {
        console.log(r);
        localStorage.setItem("wallet", JSON.stringify({ token: r.data.token, name: r.data.name }));
        navigate(`/principal`);
      })
      .catch((r) => {
        console.log(r);
      });
  }
  return (
    <>
      <Father>
        <img src={wallet} alt="" />
        <form onSubmit={handleForm}>
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
          <button>Entrar</button>
        </form>
        <p onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</p>
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
      opacity:1;
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
