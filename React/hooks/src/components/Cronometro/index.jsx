import { useEffect, useState } from "react";


let intervalo = null
const Cronometro = ({ estaIniciado }) => {

  const [count, setCount] = useState(0)

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

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Cronometro;