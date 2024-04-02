import { useState } from "react"
import ListadoResultados from "./ComponenteOperacionesListado";

function OperacionesApp() {
    const [operaciones, setOperacion]=useState([]);

    function sumar(event) {
        event.preventDefault();
        const v1=parseInt(event.target.valor1.value,10);
        const v2=parseInt(event.target.valor2.value,10);
        const suma=v1+v2;
        const nuevo={
            resultado:suma,
            valor1:v1,
            valor2:v2
        };
        setOperacion([nuevo,...operaciones]);
        event.target.valor1.value='';
        event.target.valor2.value='';      
    }

    return(
        <div>
            <form onSubmit={sumar}>
                <p>Ingrese primer Valor: <input type="text" name="valor1" id="valor1" /></p>
                <p>Ingrese segundo Valor: <input type="text" name="valor2" id="valor2" /></p>
                <input type="submit" value="Sumar" />
            </form>
            <ListadoResultados resultados={operaciones}/>            
        </div>
    )    
}

export default OperacionesApp