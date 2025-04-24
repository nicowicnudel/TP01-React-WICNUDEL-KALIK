import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoCitas from "./components/ListadoCitas";
import "./App.css";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';

function App() {
  return (
    <>
      <NavBar />
      <MainContent />
    </>
  );
}

export default App;
