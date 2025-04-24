import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoCitas from "./components/ListadoCitas";
import "./App.css";

function App() {
  const [citas] = useState([
    {
      id: 1,
      mascota: "Luna",
      dueño: "María",
      fecha: "2025-04-24",
      hora: "10:30",
      sintomas: "No come hace dos días"
    }
  ]);

  return (
    <div className="container">
      <Header />
      <Formulario />
      <ListadoCitas citas={citas} />
    </div>
  );
}

export default App;
