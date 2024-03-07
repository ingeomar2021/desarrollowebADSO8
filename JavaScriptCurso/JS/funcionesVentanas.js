function abrir() {
    //let ventana=window.open();
    let ventana=open();
    ventana.document.write("Texto escrito en la nueva ventana <br>");
    ventana.document.write("Texto escrito en la segunda linea");                      
}

function abrirConParametros() {
    let ventana = open("","","status=no, width=400, height=250, menubar=yes");
    ventana.document.write("Texto escrito");    
    
}

function confirmar() {
    let respuesta=confirm("Está seguro que desea ir a ZonaCero: ")
    if (respuesta==true) {
        //alert("presionó aceptar")
        window.location="https://zonacero.com/";
        
    } else {
        alert("presionó cancelar")
    }
    
}