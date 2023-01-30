const nombre = prompt ("ingrese su nombre de usuario");
const password = parseInt(prompt("Ingrese una clave de 4 numeros"));
alert("Gracias por ingresar, ahora vamos a registrarnos");
let user = prompt("Ingrese su Nombre de Usuario");
let clave = parseInt(prompt("Ingrese su Contraseña"));

for (let i=0; i<5; i= +i){
    if (nombre == user & password == clave){
        alert("Usuario y Contraseña son correctos");
        break;
    } else{
        alert("Usuario y Contraseña son incorrectos, ingresar de nuevo");
        user = prompt("Ingrese su Nombre de Usuario");
        clave = prompt("Ingrese su Contraseña");
        break;
    } 

}


let zapatillas;
let operacion;
let contador = 0;


function eleccion() {
    //alert('Elija una zapatilla');
    zapatillas = prompt('Elija un tipo de zapatillas de acuerdo si es Hombre, Mujer, Niño').toLowerCase();
    nuevaZapatillas(zapatillas);
}


eleccion();
nuevaZapatillas(zapatillas)

function nuevaZapatillas(zapatillas){
    switch (zapatillas) {
        case 'hombre':
            /* alert("elija que zapatillas desea: Nike, Asics, New Balance"); */
            let zapatillasHombre = prompt ('Nike, Asics, New Balance').toLowerCase();
            if (zapatillasHombre === 'Nike') {
                zapatillasHombre = 150;
                precio(zapatillasHombre);
            } else if (zapatillasHombre === 'Asics') {
                zapatillasHombre = 200;
                precio(zapatillasHombre);
            } else if (zapatillasHombre === 'New Balance') {
                zapatillasHombre = 250;
                precio(zapatillasHombre);
            } else{
                alert ('No tenemos esas zapatillas');
            }
            break;

        case 'mujer':
            /* alert("elija que zapatillas desea: Adidas, Puma, Topper").toLowerCase(); */
            let zapatillasMujer = prompt ('Adidas, Puma, Topper').toLowerCase();
            if (zapatillasMujer === 'Adidas') {
                zapatillasMujer = 120;
                precio(zapatillasMujer);
            } else if (zapatillasMujer === 'Puma') {
                zapatillasMujer = 150;
                precio(zapatillasMujer);
            } else if (zapatillasMujer === 'Topper') {
                zapatillasMujer = 180;
                precio(zapatillasMujer);
            } else{
                alert ('No tenemos esas zapatillas');
            }
            break;

        case 'niño':
            /* alert("elija que zapatillas desea: Fila, Saucony, Reebok").toLowerCase(); */
            let zapatillasNinio = prompt ('Fila').toLowerCase();
            if (zapatillasNinio === 'Fila, Saucony, Reebok') {
                zapatillasNinio = 30;
                precio(zapatillasNinio);
            } else if (zapatillasNinio === 'Saucony') {
                zapatillasNinio = 90;
                precio(zapatillasNinio);
            } else if (zapatillasNinio === 'Reebok') {
                zapatillasNinio = 60;
                precio(zapatillasNinio);
            } else {
            alert ('No tenemos esas zapatillas'); 
            }
            break;
        default:
            console.log('No existe esa marca');
    }
}

function precio (zapas){
    alert('las zapatillas cuestan' + zapas);
    const confirmacion = confirm ('Desea comprar');
    if (confirmacion === true){
        alert ('Gracias');
    } 
    agregarItem(zapas);
}

function agregarItem(item){
    contador+= item;
    suma(contador);
    const confirmacion = confirm ('¿Desea agregar otro item?');
    if (confirmacion === true){
        eleccion();
    } else if (confirmacion === false){
        alert ('Gracias, vuelva pronto');
    } 
}

function suma(item){
    alert ('El total de la compra es' + item);
}

nuevaZapatillas(zapatillas);