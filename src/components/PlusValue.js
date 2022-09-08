import React from "react";
import { Father } from "./common/Father";

export default function Plus() {
  return (
    <Father>
      <header>
        <h1>Nova Entrada</h1>
      </header>
      <form>
        <input type="text" placeholder="Valor" name="valor"></input>
        <input type="text" placeholder="Descrição" name="nome"></input>
        <button>Salvar entrada</button>
      </form>
    </Father>
  );
}

