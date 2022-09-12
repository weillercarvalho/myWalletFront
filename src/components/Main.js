import React from "react";
import styled from "styled-components";
import exit from "../assets/images/Vector.png";
import plus from "../assets/images/mais2.svg"
import minus from "../assets/images/menos2.svg"
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";
import { result } from "../services/Services";
import dayjs from "dayjs";


export default function Main() {
  const days = dayjs().format('DD/MM')
  const [layout,setLayout] = React.useState(0)
  const [info,setInfo] = React.useState('');
  const {count} = React.useContext(UserContext);
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem(`wallet`));

  React.useEffect(() => {
    result().then((r) => {
      console.log(r)
      setLayout(r.data.length)
      setInfo(r.data)
    }).catch((r) => {
      console.log(r)
    })
  },[count])

 

  const exitingAccount = () => {
    navigate(`/`);
    localStorage.clear();
  }

  if (layout === 0) {
    return (
      <Father>
        <header>
          <h1>Olá, {auth.name} </h1>
          <img src={exit} onClick={() => exitingAccount()} alt="Exit from the program." />
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
  )
  } else {
    return (
      <Father>
        <header>
          <h1>Olá, {auth.name} </h1>
          <img src={exit} onClick={() => exitingAccount()} alt="Exit from the program." />
        </header>
        <nav>
          {info.map((value,index) => (<Values key={index} description={value.description} days={days} value={value.value} type={value.type}/>))}
          <Total info={info} />
        </nav>
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
  )
  }
}

function Values({description, value, type, days}) {
  if (type === "plus") {
    return (
      <span><SpanTime>{days}</SpanTime> <SpanDescription>{description}</SpanDescription> <SpanGreen>{value}</SpanGreen></span>
    )
  }
  else if (type === "minus") {
    return (
      <span><SpanTime>{days}</SpanTime> <SpanDescription>{description}</SpanDescription> <SpanRed>{value}</SpanRed></span>
    )
  }
}

function Total({info}) {
  const numbers = info.map((value) => {
    if (value.type === "minus") {
      return value.value * (-1);
    }else if (value.type === "plus") {
      return Number(value.value);
    }
  })
  const finalValue = numbers.reduce((acum,val) => acum += val);
  const cleanfinalValue = Math.abs(finalValue).toFixed(2);

  if (finalValue < 0) {
    return(
      <span><SpanFinal>Saldo</SpanFinal><SpanRedFinal>{cleanfinalValue}</SpanRedFinal></span>
    )
  } else if (finalValue >= 0) {
    return(
      <span><SpanFinal>SALDO</SpanFinal><SpanGreenFinal>{cleanfinalValue}</SpanGreenFinal></span>
    )
  }
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
    align-items: center;
    position: relative;
    overflow-y:scroll;
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
  span {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-top:10px;
    display:flex;
    
  }
`
const SpanGreen = styled.span`
  color: var(--color-positive-green);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  position: absolute;
  right: 10px;
`
const SpanRed = styled.span`
  color: var(--color-negative-red);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  right: 10px;
`
const SpanTime = styled.span`
  color: var(--color-time);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  left: 10px;
`
const SpanDescription = styled.span`
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-top:10px;
    display: flex;
`
const SpanFinal = styled.span`
    font-family: "Raleway", sans-serif;
    font-weight: 700 !important;
    font-size: 17px !important;
    margin-top:10px;
    display: flex;

    @media (max-width: 375px) {
      margin-right: 265px;
    }
`
const SpanRedFinal = styled.span`
  color: var(--color-negative-red);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  position: absolute;
  right: 10px;
`
const SpanGreenFinal = styled.span`
  color: var(--color-positive-green);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: justify;
  position: absolute;
  right: 10px;
`
