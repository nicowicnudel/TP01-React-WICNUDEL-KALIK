import React from "react";

const InputText = (prop) => {
    return(
        <input type="text" placeholder={prop.placeHolder} name={prop.nombre}/>
    )

}

export default InputText