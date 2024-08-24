const iva = 22;
let carrito = 0;
let distanciaDomicilio = 0;
let costoEnvio = 0;


function calcularIvaProducto(precio) {
    let ivaProducto = precio * (iva / 100);
    return ivaProducto;
}

function pedirPrecioProducto() {
    let producto = parseFloat(prompt("Ingrese el precio del producto (Dolares):"));
    precioTotal = producto + calcularIvaProducto(producto);
    carrito = carrito + precioTotal;
    alert("se agrego producto: U$S " + producto + ". mas iva del producto: U$S " + calcularIvaProducto(producto) + ". Total del carrito: U$S " + carrito);
}

let salir = true;
while (salir === true) {
    pedirPrecioProducto();
    salir = confirm("quiere agregar mas productos al carrito?");
    //console.log(salir);
}

let envio = confirm("Desea recibir su/s producto/s en la puerta de su domicilio?");

if (envio === true) {
    let direccion = prompt("Ingrese su direccion.");
    let distanciaDomicilio = parseFloat(prompt("Ingrese la distancia en Km (aproximados) desde la oficina a su domicilio. Maximo 100 Km"));
    if (distanciaDomicilio > 0 && distanciaDomicilio <= 25) {
        costoEnvio = 0;
    } else if (distanciaDomicilio > 25 && distanciaDomicilio <= 50) {
        costoEnvio = 10;
    } else if (distanciaDomicilio > 50 && distanciaDomicilio <= 75) {
        costoEnvio = 25;
    } else if (distanciaDomicilio > 75 && distanciaDomicilio <= 100) {
        costoEnvio = 45;
    } else if (distanciaDomicilio > 100) {
        alert(`No realizamos envios cuya direccion sea mayor a 100 km de distancia. Debera retirar su pedido en nuestras oficinas
        >>>>>Detalles del pedido:<<<<<
        TOTAL A PAGAR: U$S ${carrito}.
        Lo esperamos en nuestras oficinas para concretar la compra. 
        Saludos.
        `);
    };
    if (distanciaDomicilio <= 100) {
        alert(`>>>>>Detalles del pedido:<<<<<
        Costo total de productos: U$S ${carrito}.
        direccion de envio: ${direccion}.
        Costo de envio: U$S ${costoEnvio}.
        TOTAL A PAGAR: U$S ${carrito + costoEnvio}.
    Su producto llegara a su domicilio lo antes posible.
    Saludos.
    `);
    }

} else {
    alert(`>>>>>Detalles del pedido:<<<<<
    Costo total de productos: U$S ${carrito}.
    Lo esperamos en nuestras oficinas para concretar la compra. 
    Saludos.
    `);
}