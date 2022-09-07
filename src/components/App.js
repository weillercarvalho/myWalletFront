import React from "react";
import styled from "styled-components";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import { Reset } from "styled-reset";
import { UserContext } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "./Global";
import Main from "./Main";
import PrivatePage from "../services/PrivatePage";

export default function App() {
  const [tokens, setTokens] = React.useState("");
  const auth = JSON.parse(localStorage.getItem("trackit"));
  if (auth && tokens === "") {
    setTokens(JSON.parse(localStorage.getItem("trackit")));
  }

  return (
    <>
      <Reset />
      <Global />
      <UserContext.Provider value={{ tokens, setTokens }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SingIn />} />
            {/* <Route path="/cadastro" element={<SingUp />}/>
                <Route path="/principal" element={<PrivatePage><Main /></PrivatePage>}/> */}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

const Father = styled.div`
  background-color: red;
`;
