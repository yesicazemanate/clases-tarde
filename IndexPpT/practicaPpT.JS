
let puntosj1 = 0
let puntosj2=0
while (true)  {
    alert("jugador 1")
    let jugador1ppt = prompt("piedra papel o tijera")
    alert("jugador 2")
    let jugador2ppt = prompt("piedra papel o tijera")

    if (jugador1ppt == "piedra" && jugador2ppt == "tijera") {
        alert("gano el socio 1")
        puntosj1+=1
    } else if(jugador1ppt=="papel"&& jugador2ppt=="piedra"){
        puntosj1 += 1
        alert("gano el socio  1")
    }
    else if (jugador1ppt == "tijera" && jugador2ppt == "papel") {
        puntosj1 += 1
        alert("gano el socio 1")
    }
    else if (jugador1ppt == jugador2ppt) {
        puntosj1 += 0.5
        puntosj2 += 0.5
        alert("cada jugador se lleva medio punto")
    } else {
        puntosj2 += 1
        alert("gano el socio 2")
    }

    
    if (puntosj1 >= 3 && puntosj2 >= 3) {
        alert("los socios estan empatados")
        break
    } else if (puntosj2 >= 3) {
        alert("gano el socio 2")
        break
    } else if (puntosj1 >= 3) {
        alert("gano el socio 1")
        break
    }  
}
