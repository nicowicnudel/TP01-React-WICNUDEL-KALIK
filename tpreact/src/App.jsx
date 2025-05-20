import React, { useState } from "react";
import Formulario from "./componentes/formulario/Formulario.jsx";
import "./App.css";
import Cita from "./componentes/citas/citas.jsx";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <div className='container'>
      <h1>Administrador de pacientes</h1>
      <div className='row'>
        <div className='one-half column'>
          <h1>Crear cita</h1>
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className='one-half column'>
          <h1>Administra tus citas</h1>
          {citas.map((cita, index) => (
            <Cita key={index} cita={cita} eliminarCita={() => eliminarCita(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
