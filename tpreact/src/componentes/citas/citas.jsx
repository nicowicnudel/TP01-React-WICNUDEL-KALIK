import "./citas.css";

function Cita({ cita }) {
  return (
    <div className="cita">
      <p><strong>Mascota:</strong> {cita.mascota}</p>
      <p><strong>Dueño:</strong> {cita.dueño}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Síntomas:</strong> {cita.sintomas}</p>
      <button className="eliminar">Eliminar</button>
    </div>
  );
}

export default Cita;