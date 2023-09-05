let añoNacimiento = prompt("digite año de nacimiento")
let mesNacimiento= prompt("digite mes de nacimiento")
let añoActual = new Date().getFullYear();
const mesActual = new Date().getMonth() + 1;
let cont=0
for (let i = añoNacimiento; i < añoActual; i++) {
    cont ++
    
}
if (mesNacimiento > mesActual) {
        cont--
   }
alert(`la edad actual es ${cont}`)
