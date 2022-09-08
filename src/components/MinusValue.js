import React from "react";
import { Father } from "./common/Father";


export default function Minus () {
    return (
        <Father>
        <header>
          <h1>Nova saída</h1>
        </header>
        <form>
          <input type="text" placeholder="Valor" name="valor"></input>
          <input type="text" placeholder="Descrição" name="nome"></input>
          <button>Salvar saída</button>
        </form>
      </Father>
    )
}