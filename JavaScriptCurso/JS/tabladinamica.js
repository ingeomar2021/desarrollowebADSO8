const personas = [{
    nombre: "dardo",
    edad: 52
}, {
    nombre: "pedro",
    edad: 522
}, {
    nombre: "ana",
    edad: 89
}, {
    nombre: "alicia",
    edad: 55
}, {
    nombre: "carlos",
    edad: 21
}, {
    nombre: "capitanich",
    edad: 89
}, {
    nombre: "carla",
    edad: 66
}, {
    nombre: "altina",
    edad: 90
}]

function mostrarTabla(palabra) {
    let tabla="<table>";
    tabla+="<tr><th>Nombre</th><th>Edad</th></tr>";
    for (const persona of personas) {
        //Cuando el campo está vacio
        if (palabra==undefined)  {
            tabla+=`<tr><td>${persona.nombre}</td><td>${persona.edad}</td></tr>`;
        
        // cuando el campo tiene algo escrito
        }else{
            if (persona.nombre.startsWith(palabra)) {
                tabla+=`<tr><td>${persona.nombre}</td><td>${persona.edad}</td></tr>`;                
            }
        }        
    }
    tabla+="</table>";
    document.querySelector("#tabla").innerHTML=tabla;
}

document.querySelector("#buscar").addEventListener("keyup",()=>{
    mostrarTabla(document.querySelector("#buscar").value);
});

mostrarTabla()