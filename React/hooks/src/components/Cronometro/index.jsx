import { useContext, useEffect, useState } from "react";
import GlobalContext from "../global/context";


let intervalo = null
const Cronometro = () => {

  const [count, setCount] = useState(0)

  const {estaIniciado, resetCount} = useContext(GlobalContext)
  
  useEffect(() => {
    console.log("Esta iniciado?", estaIniciado)
    if (estaIniciado) {
      intervalo = setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000);
    }else{
      clearInterval(intervalo)
    }

  }, [estaIniciado])

  useEffect(() => {
    console.log("Reset", resetCount);
    setCount(0)
  }, [resetCount])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Cronometro;