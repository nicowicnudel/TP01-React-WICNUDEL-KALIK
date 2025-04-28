import Cita from "./Cita";
import "./ListadoCitas.css";

function ListadoCitas({ citas }) {
  return (
    <div className="listado">
      <Cita mascota="tina" dueño = "chechu" fecha = "" hora = "" sintomas = "le duele la pata"></Cita> 
      <Cita mascota="cacho" dueño = "nico" fecha = "" hora = "" sintomas = "le duele la panza"></Cita>  
      <Cita mascota="ciro" dueño = "tomi" fecha = "" hora = "" sintomas = "le pica el pie izquierdo"></Cita>   
    </div>
  );
}

export default ListadoCitas;