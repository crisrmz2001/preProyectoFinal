class Usuario{
    constructor(nombre,email,password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    saludar(){
       console.log(`Hola!, ${this.nombre}! Me alegro de verte.`)
    }
}
let user = prompt('Hola! como te llamas?')
let mail = prompt('Indicanos tu Correo Electronico')
let password = prompt('Ingresa una contraseña')
let persona = new Usuario (user,mail,password);
persona.saludar();
class Productos{
    constructor(modelo,color,precio,origen){
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
        this.origen = origen;
    }
    iva(){
        this.precio = this.precio * 1.21
    }
}
let lista = [];
lista.push(new Productos("benelli 302", "rojo" ,1850000,"Italia"));
lista.push(new Productos("Benelli Leoncino 250", "azul" ,1205000,"Italia"));
lista.push(new Productos("Benelli 502 C", "negro" ,1465000,"Italia"));
lista.push(new Productos("Benelli 752 S", "blanco" ,1350000,"Italia"));
lista.push(new Productos("Benelli Leon 550", "rojo" ,1350000,"Italia"));
lista.push(new Productos("Benelli Trk 502 X", "negro" ,1775000,"Italia"));
console.log(lista);
for(const element of lista) {
    element.iva();
}
function disccont(precio, descuento){
    let finalPrice = precio - (precio * descuento / 100);
    return finalPrice
}
let producto = parseInt(prompt(`Ingresa el precio del prodcuto`));
    while(producto < 0 || isNaN(producto)){
        producto = parseInt(prompt(`No has ingresado ningun numero!`));
    }
    let descto = parseInt(prompt(`Cuanto es el descuento del producto?`));
    while(descto < 0 || isNaN(descto)){
       descto = parseInt(prompt(`No has ingresado porcentaje de descuento!`));
    }
    let precioFinal = disccont(producto,descto);
    alert(`El precio final del producto, mas el descuento es de ${precioFinal} $ pesos`)
