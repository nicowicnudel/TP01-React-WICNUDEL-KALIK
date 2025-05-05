import React from "react";

const InputText = (prop) => {
    return(
        <input type="text" name={`${props.nombre}`} className="u-full-width" placeholder={`${props.placeHolder}`}/>
    )
}
export default InputText