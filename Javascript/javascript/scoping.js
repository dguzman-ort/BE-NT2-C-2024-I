
if (true) {
  var ambito = "Esta variable estara disponible hasta que el codigo y/o funcion se ejecuto"

  console.log(ambito)
}


console.log(ambito, typeof ambito)


if (true){
  
  let blockedScoped = "Esta variable solo estara disponible dentro de este bloque de codigo"

  console.log("blockedScoped", blockedScoped)

  const otroBlock = "Esta constante solo estara disponible dentro de este bloque de codigo"

  console.log("otroBlock", otroBlock)

}

console.log("blockedScoped", typeof blockedScoped)

console.log("otroBlock", typeof otroBlock)