import React from "react";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import { Reset } from "styled-reset";
import { UserContext } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "./Global";
import Main from "./Main";
import PrivatePage from "../services/PrivatePage";
import Plus from "./PlusValue";
import Minus from "./MinusValue";


export default function App() {
  const [tokens, setTokens] = React.useState(false);
  const auth = JSON.parse(localStorage.getItem(`wallet`));
  if (auth && tokens === false) {
    setTokens(JSON.parse(localStorage.getItem(`wallet`)));
  }

  return (
    <>
      <Reset />
      <Global />
      <UserContext.Provider value={{ tokens, setTokens }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/cadastro" element={<SingUp />} />
            <Route
              path="/principal"
              element={
                <PrivatePage>
                  <Main />
                </PrivatePage>
              }
            />
            <Route
              path="/mais"
              element={
                <PrivatePage>
                  <Plus />
                </PrivatePage>
              }
            />
            <Route
              path="/menos"
              element={
                <PrivatePage>
                  <Minus />
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
