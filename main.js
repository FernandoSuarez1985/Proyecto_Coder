
let nombre = prompt("Ingrese su usuario");
let password = parseInt(prompt("Ingrese una clave de 4 numeros"));

while (password.toString().length < 4){
    alert("Usuario y Contraseña son incorrectos, ingresar de nuevo");
    password = prompt("Ingrese una clave de 4 numeros");
}

let zapatillas;
let operacion;
let contador = 0;


function eleccion() {
    //alert('Elija una zapatilla');
    zapatillas = prompt('Que tipo de zapatillas desea comprar: 1.hombre, 2.mujer o 3.niño').toLowerCase();
    nuevaZapatillas(zapatillas);
}


eleccion();
nuevaZapatillas(zapatillas);

function nuevaZapatillas(zapatillas){
    switch (zapatillas) {
        case 'hombre':
            /* alert(`elija que zapatillas desea a, b, c `);*/   
            let zapatillasHombre = prompt('1.Nike 2.Asics 3.New Balance').toLowerCase();
            if (zapatillasHombre === '1') {
                zapatillasHombre = 150;
                precio(zapatillasHombre);
            } else if (zapatillasHombre === '2') {
                zapatillasHombre = 200;
                precio(zapatillasHombre);
            } else if (zapatillasHombre === '3') {
                zapatillasHombre = 250;
                precio(zapatillasHombre);
            } else{
                alert ('No tenemos esas zapatillas');
            }
            break;

        case 'mujer':
            /* alert("elija que zapatillas desea: a, b, c");  */
            let zapatillasMujer = prompt ('1. Adidas 2.Puma 3.Topper').toLowerCase();
            if (zapatillasMujer === '1') {
                zapatillasMujer = 120;
                precio(zapatillasMujer);
            } else if (zapatillasMujer === '2') {
                zapatillasMujer = 150;
                precio(zapatillasMujer);
            } else if (zapatillasMujer === '3') {
                zapatillasMujer = 180;
                precio(zapatillasMujer);
            } else{
                alert ('No tenemos esas zapatillas');
            }
            break;

        case 'niño':
            alert("elija que zapatillas desea: a, b, c"); 
            let zapatillasNinio = prompt ('1.Fila 2.Saucony 3.Reebok').toLowerCase();
            if (zapatillasNinio === '1') {
                zapatillasNinio = 30;
                precio(zapatillasNinio);
            } else if (zapatillasNinio === '2') {
                zapatillasNinio = 90;
                precio(zapatillasNinio);
            } else if (zapatillasNinio === '3') {
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
        Esc;
    } 
}

function suma(item){
    alert ('El total de la compra es' + item);
}

nuevaZapatillas(zapatillas);

/* cuotasZapatillas = parseInt(prompt("que cantidad de cuotas 1, 3, 6, 12"));
while (cuotasZapatillas!= 1 && cuotasZapatillas!= 3 && cuotasZapatillas!= 6 && cuotasZapatillas!= 12 ){
    alert("No se puede elegir estas cuotas")
    cuotasZapatillas = parseInt(prompt("Que opcion desea = 1, 3, 6, 12"));
}

if (zapatillas == Nike) {
    switch (cuotasZapatillas){
        case 1:
            alert("El precio de las zapatillas es " + Nike);
            break;
        case 3:
            alert("El precio de las zapatillas es " + (Nike + ((Nike*20)/100)));
            alert("El precio de las zapatillas es " + (Nike + ((Nike*20)/100))/3);
            break;
        case 3:
            alert("El precio de las zapatillas es " + (Nike + ((Nike*40)/100)));
            alert("El precio de las zapatillas es " + (Nike + ((Nike*40)/100))/6);
            break;
        case 3:
            alert("El precio de las zapatillas es " + (Nike + ((Nike*60)/100)));
            alert("El precio de las zapatillas es " + (Nike + ((Nike*60)/100))/12);
            break;
    }
} */