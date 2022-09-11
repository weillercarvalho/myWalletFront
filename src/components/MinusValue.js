import React from "react";
import { useNavigate } from "react-router-dom";
import { Father } from "./common/Father";
import { UserContext } from "./Context";
import { removevalue } from "../services/Services";

export default function Minus () {
  const {minus, setMinus, description, setDescription,count, setCount} = React.useContext(UserContext);
  const navigate = useNavigate();


  function handleForm(e) {
    e.preventDefault();
    const replaceCommon = minus.replace(`,`,`.`)
    const bruteNumber = Number(replaceCommon);
    const cleanNumber = bruteNumber.toFixed(2);
    const body = {
      value: cleanNumber,
      description: description,
      type: "minus"
    }
    removevalue(body).then((r) => {
      setMinus('');
      setDescription('');
      setCount(!count)
      navigate(`/principal`);
    }).catch((r) => {
      setMinus('');
      setDescription('');
    })

  }

    return (
      <Father>
        <header>
          <h1>Nova saída</h1>
        </header>
        <form onSubmit={handleForm}>
          <input type="number" placeholder="Valor" value={minus} onChange={(e) => setMinus(e.target.value)} name="valor" required></input>
          <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} name="nome" required></input>
          <button>Salvar saída</button>
        </form>
      </Father>
    )
}