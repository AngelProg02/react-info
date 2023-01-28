import { useState, useEffect } from "react";

const Component = () => {
    const[value,setValue] = useState(false)

    useEffect(() => {
        //Como mínimo se ejecuta una vez
        console.log("Código que ejecutamos")
    }, []/*Este segundo se ejecuta más de una vez
        si no se le pasan dependencias(que será un array), es decir,
        este valor es opcional. Si le pasamos alguno, le estamos
        limitando el rango de acción
        */ 
    //[] listOfDependencies 
    )
}

