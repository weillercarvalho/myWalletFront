import React from "react";
import { useNavigate } from "react-router-dom";
import { Father } from "./common/Father";
import { UserContext } from "./Context";
import { addvalue } from "../services/Services";

export default function Minus () {
  const {plus, setPlus, description, setDescription} = React.useContext(UserContext);
  const navigate = useNavigate();


  function handleForm(e) {
    e.preventDefault();
    const replaceCommon = plus.replace(`,`,`.`)
    const bruteNumber = Number(replaceCommon);
    const cleanNumber = bruteNumber.toFixed(2);
    const body = {
      value: cleanNumber,
      description: description,
      type: `plus`
    }
    addvalue(body).then((r) => {
      console.log(r);
      setPlus('');
      setDescription('');
      navigate(`/principal`);
    }).catch((r) => {
      console.log(r);
      setPlus('');
      setDescription('');
    })

  }

    return (
      <Father>
        <header>
          <h1>Nova entrada</h1>
        </header>
        <form onSubmit={handleForm}>
          <input type="number" placeholder="Valor" value={plus} onChange={(e) => setPlus(e.target.value)} name="valor" required></input>
          <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} name="nome" required></input>
          <button>Salvar entrada</button>
        </form>
      </Father>
    )
}
