




let numero = prompt("digite el numero de contraseñas deseadas")
let letra = (Array.from("abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXY"))
let cont = 0
let seguir = true
let numeros=[]
let contraseña

while (seguir==true) {
    for (let j = 0; j <= 2; j++) {
       let num = Math.ceil(Math.random() * 9)
        
        numeros.push(num)
    
        for (let i = 0; i < numeros; i++) {
      
            contraseña = numeros[i] + letra[i] + letra[j] + numeros[j]

            alert(contraseña)
            
        }
        cont++
    }
    if (cont == numero) {
        seguir = false
    }
}
console.log(numeros)
console.log(letra)
console.log(cont)