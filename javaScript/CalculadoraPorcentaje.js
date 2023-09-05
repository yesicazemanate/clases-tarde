let precio = prompt("ingrese precio del producto")
let porcentaje = prompt("ingrese porcentaje del descuento")
let descuento = (precio /100)*porcentaje
let precioFinal = precio - descuento
alert(`su descuento es ${descuento}`)
alert(`el precio final es ${precioFinal}`)