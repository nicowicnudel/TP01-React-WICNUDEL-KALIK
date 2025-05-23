import React from "react";
import "../listadoCitas/ListadoCitas.css";
import Boton from "../boton/boton.jsx";

const ListadoCitas = (props) => {
  return(
      <div className="cita">
          <p>Mascota: <span>{props.nombre}</span></p>
          <p>Dueño: <span>{props.dueño}</span></p>
          <p>Fecha: <span>{props.fecha}</span></p>
          <p>Hora: <span>{props.hora}</span></p>
          <p>Sintomas: <span>{props.sintomas}</span></p>
          <Boton></Boton>
      </div>
  )
}

export default ListadoCitas;