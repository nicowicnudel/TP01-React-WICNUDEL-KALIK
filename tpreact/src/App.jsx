import { useState } from "react";
import Formulario from "./componentes/formulario/Formulario.jsx";
import ListadoCitas from "./componentes/listadoCitas/ListadoCitas.jsx";

import "./App.css";

import React from 'react';



function App() {
  return (
    <>
      <Formulario></Formulario>
      <NavBar />
      <MainContent />
    </>
  );
}

export default App;
