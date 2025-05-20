import "./citas.css";

function Cita({ cita, onEliminar }) {
  const handleEliminar = () => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar esta cita?");
    if (confirmar) {
      onEliminar(cita.id);
    }
  };

  return (
    <div className="cita">
      <p><strong>Mascota:</strong> {cita.mascota}</p>
      <p><strong>Dueño:</strong> {cita.dueño}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Síntomas:</strong> {cita.sintomas}</p>
      <button className="eliminar" onClick={handleEliminar}>Eliminar</button>
    </div>
  );
}

export default Cita;
