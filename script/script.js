//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();
//funcion para agregar listeners a los botones
function agregarMonitores() {
    let mostrarpa = document.getElementById("mostrarPaises");
    mostrarpa.addEventListener("click", mostrarPaises);
    let agregarpa = document.getElementById("agregarPais");
    agregarpa.addEventListener("click", agregarPais);
}

//funcion que mostrara las paises en la pagina
function mostrarPaises() {
    let datos = "";
    for(let nuevo = 0; nuevo < paises.length; nuevo++){
    datos += `<table class="table table-dark table-sm">
        <tr class="table-active">
        <th>Nombre</th> <th>Capital</th> <th>Idioma Oficial</th> <th>Moneda</th>  </tr>
        <tr>
        <td>${paises[nuevo].nombre}</td> <td>${paises[nuevo].capital}</td> <td>${paises[nuevo].idioma_oficial}</td> <td>${paises[nuevo].moneda}</td>
        </tr>
        <tr class="band">
        <td colspan="4"><img src="${paises[nuevo].bandera}"></td>
        </tr>
        </table>`;
    }
    document.getElementById("paises").innerHTML = datos;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
    let paisn =  prompt("Escribe el nombre del pais");
    let ciudadn = prompt("Escribe el nombre de la capital");
    let idioman = prompt("Escribe el nombre del idioma");
    let monedan = prompt("Escribe el nombre de la moneda");
    let banderan = prompt("Escribe el link o vinculo de la bandera");
    if (paisn,ciudadn, idioman, monedan, banderan === null || paisn,ciudadn, idioman, monedan, banderan  == '' ) {
        return false;
    }else{
    let pais = {nombre: paisn, capital: ciudadn, idioma_oficial: idioman, moneda: monedan, bandera: banderan};
    paises.unshift(pais);
    }   
    let datos = "";
    for(let nuevo = 0; nuevo < paises.length; nuevo++){
        datos += `<table class="table table-dark table-sm">
        <tr class="table-active">
        <th">Nombre</th> <th>Capital</th> <th>Idioma Oficial</th> <th">Moneda</th> </tr>
        <tr>
        <td>${paises[nuevo].nombre}</td> <td>${paises[nuevo].capital}</td> <td>${paises[nuevo].idioma_oficial}</td> <td>${paises[nuevo].moneda}</td>
        </tr>
        <tr class="band">
        <td colspan="4"><img src="${paises[nuevo].bandera}"></td>
        </tr>
        </table>`;
    }
    document.getElementById("paises").innerHTML = datos;
}