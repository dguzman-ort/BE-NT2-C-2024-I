const Button = ({className, callback, text}) => {
  return (
    <button className={className} onClick={callback}>{text}</button>
    // <button onClick={()  => { console.log("Estoy apretando este boton")}} > mi boton </button>
  )
}

export default Button;