import React from "react";
import InputText from "./components/inputText/InputText.jsx"

function Formulario() {
  return (
    <div className="formulario">
      <h2>Crear Cita</h2>
      <form>
        <InputText placeHolder="nombre de la mascota" nombre="nombre"></InputText>
        <InputText placeHolder="Nopmbre Dueño" nombre="nombre"></InputText>
        <input type="date" />
        <input type="time" />
        <textarea placeholder="Síntomas"></textarea>
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;