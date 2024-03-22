import { useState } from "react";

function ComponenteHook3() {
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
            </thead>
            <tbody>
                {articulos.map(articulo=>{
                    return(
                        <tr>
                            <td>{articulo.codigo}</td>
                            <td>{articulo.descripcion}</td>
                            <td>{articulo.precio}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        </>
    )
    
}

export default ComponenteHook3;