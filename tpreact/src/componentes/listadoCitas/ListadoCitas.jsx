import Cita from "./citas/citas.jsx";


function ListadoCitas({ citas }) {
  return (
    <div className="listado">
      <Cita mascota="tina" dueño = "chechu" fecha = "2021-05-08" hora = "07:45" sintomas = "le duele la pata"></Cita> 
      <Cita mascota="cacho" dueño = "nico" fecha = "2020-04-03" hora = "11:11" sintomas = "le duele la panza"></Cita>  
      <Cita mascota="ciro" dueño = "tomi" fecha = "2025-02-01" hora = "20:20" sintomas = "le pica el pie izquierdo"></Cita>   
    </div>
  );
}

export default ListadoCitas;