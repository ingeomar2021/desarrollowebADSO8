import Dado from "./ComponenteDado";

function AppDado(params) {
    const valor1=Math.trunc(Math.random()*6)+1;
    const valor2=Math.trunc(Math.random()*6)+1;
    const valor3=Math.trunc(Math.random()*6)+1;


    return(
        <div>
            <Dado valor={valor1}/>
            <Dado valor={valor2}/>
            <Dado valor={valor3}/>
        </div>
    )
    
}

export default AppDado