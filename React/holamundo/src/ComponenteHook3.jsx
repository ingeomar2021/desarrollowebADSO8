import { useState } from "react";

function ComponenteHook3() {

    function eliminarUltimaFila() {
        if (articulos.length>0) {
            const temp=Array.from(articulos)
            temp.pop()
            setArticulos(temp)
        }
    }

    function borrar(cod) {
        const temp=articulos.filter((articulo)=>articulo.codigo!=cod)
        setArticulos(temp)        
    }


    const[articulos,setArticulos]=useState([{
        codigo:1,
        descripcion:"Papas",
        precio:1020
    },{
        codigo:2,
        descripcion:"Mangos",
        precio:2050

    },{
        codigo:3,
        descripcion:"Platanos",
        precio:2010
    }]);


    return(
        <>
        <table border="1">
            <thead>
                <th>Código</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Borrar</th>
            </thead>
            <tbody>
                {articulos.map(articulo=>{
                    return(
                        <tr key={articulo.codigo}>
                            <td>{articulo.codigo}</td>
                            <td>{articulo.descripcion}</td>
                            <td>{articulo.precio}</td>
                            <td><button onClick={()=>borrar(articulo.codigo)}>Borrar</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button onClick={eliminarUltimaFila}>Eliminar Ultima Fila</button>
        
        </>
    )
    
}

export default ComponenteHook3;