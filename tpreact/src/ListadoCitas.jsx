import Cita from "./Cita";
import "./ListadoCitas.css";

function ListadoCitas({ citas }) {
  return (
    <div className="listado">
      <h2>Listado de Citas</h2>
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} />
      ))}
    </div>
  );
}

export default ListadoCitas;