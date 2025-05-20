import React, { useState } from "react";
import Formulario from "./componentes/formulario/Formulario.jsx";
import Cita from "./componentes/citas/citas.jsx";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div className='container'>
      <h1>Administrador de pacientes</h1>
      <div className='row'>
        <div className='one-half column'>
          <h2>Crear cita</h2>
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className='one-half column'>
          <h2>Administra tus citas</h2>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} onEliminar={eliminarCita} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
