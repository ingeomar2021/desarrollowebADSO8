import { useState } from "react";

function ComponenteHook() {

    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador + 1);
    }

    return (
        <>
            <p>El valor del contador es: {contador}</p>
            <button onClick={aumentarContador}>Aumentar</button>
        </>
    )

}

export default ComponenteHook;