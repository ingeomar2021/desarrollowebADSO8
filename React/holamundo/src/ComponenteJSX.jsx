import './App.css';

function mostrarTitulo(titulo){
    return(
        <h1>
            {titulo}
        </h1>
    )
}

function age(edad) {
    if (edad>=18) {
        return(
            <p>Es mayor de Edad</p>
        )
        
    }else{
        return(
            <p>Es menor de Edad</p>
        )
    }
    
}


function ComponenteJSX() {
    const siglo=21;
    const persona={
        nombre: "Juan",
        edad: 34
    };

    const buscadores=["https://www.google.com.co/", "https://www.bing.com/", "https://espanol.search.yahoo.com/"];


    const aleatorio=()=>Math.trunc(Math.random()*10);
    let edad=10;

    return (
        <>
            <h1>Componente JSX</h1>
            <hr />
            <p>Estamos en el siglo {siglo} </p>
            <p>La suma de 50+50 es igual a {50+50} </p>
            <p>{persona.nombre} tiene {persona.edad}</p>
            <h3>Llamando a una función</h3>
            <p>Valor aleatorio generado: {aleatorio()}</p>
            <h3>Buscadores utilizados</h3>
            <a href={buscadores[0]}>Google</a><br />
            <a href={buscadores[1]}>Bing</a><br />
            <a href={buscadores[2]}>Yahoo</a><br />
            {mostrarTitulo("Hola Mundo")}
            {mostrarTitulo("Fin")}
            {age(edad)}

        
        </>
    )

}

export default ComponenteJSX;