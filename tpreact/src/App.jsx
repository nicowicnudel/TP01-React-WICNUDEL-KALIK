import React from "react";
import Formulario from "./componentes/formulario/Formulario.jsx";
import { useState } from 'react'
import './App.css'
import ListadoCitas from "./components/listadoCitas/ListadoCitas.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <h1>Administrados de pacientes</h1>
      <div className='row'>
        <div className='one-half column'>
          <h1>Crear cita</h1>
          <Formulario></Formulario>
        </div>
        <div className='one-half column'>
          <h1>Administra tus citas</h1>
          <ListadoCitas nombre="Mateeeeeo" dueño="Angie" fecha="9/12/2020" hora="17pm" sintomas="le duele el pie"></ListadoCitas>
          <ListadoCitas nombre="Bormardiro" dueño="Jennie" fecha="11/2/2321" hora="21pm" sintomas="zarpullido en la piel"></ListadoCitas>
          <ListadoCitas nombre="Tralalero" dueño="Damian" fecha="04/11/2007" hora="19am" sintomas="dolor de cabeza"></ListadoCitas>
        </div>
      </div>
    </div>
    </>
  )
}

export default App