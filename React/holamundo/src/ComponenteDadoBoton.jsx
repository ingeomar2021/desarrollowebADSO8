import Dado from "./ComponenteDado";
import { useState } from "react";

function DadoAppBoton() {
    function generarValor() {
        return Math.trunc(Math.random()*6)+1;        
    }
    const [valor1,setValor1]=useState(generarValor());
    const [valor2,setValor2]=useState(generarValor());
    const [valor3,setValor3]=useState(generarValor());

    function tirar() {
        setValor1(generarValor());
        setValor2(generarValor());
        setValor3(generarValor());
        
    }
    return(
        <div>
            <Dado valor={valor1}/>
            <Dado valor={valor2}/>
            <Dado valor={valor3}/>
            <button onClick={tirar}>Tirar</button>
        </div>
    )    
}
export default DadoAppBoton