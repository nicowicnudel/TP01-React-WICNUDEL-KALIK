import React, { useState } from "react";
import InputText from "../inputText/InputText.jsx";
import "./Formulario.css";

const Formulario = ({ agregarCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCita(cita);
    setCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <div className="contenedor-formulario">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Mascota</label>
        </div>
        <div>
          <input type="text" name="mascota" value={cita.mascota} onChange={handleChange} placeholder="Nombre mascota" className="u-full-width" />
        </div>
        <div>
          <label>Nombre Dueño</label>
        </div>
        <div>
          <input type="text" name="dueño" value={cita.dueño} onChange={handleChange} placeholder="Nombre dueño de la mascota" className="u-full-width" />
        </div>
        <div>
          <label>Fecha</label>
        </div>
        <div>
          <input type="date" name="fecha" value={cita.fecha} onChange={handleChange} className="u-full-width" />
        </div>
        <div>
          <label>Hora</label>
        </div>
        <div>
          <input type="time" name="hora" value={cita.hora} onChange={handleChange} className="u-full-width" />
        </div>
        <div>
          <label>Sintomas</label>
        </div>
        <div>
          <textarea name="sintomas" value={cita.sintomas} onChange={handleChange} className="u-full-width"></textarea>
        </div>
        <div>
          <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
