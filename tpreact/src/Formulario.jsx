import "./Formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <h2>Crear Cita</h2>
      <form>
        <input type="text" placeholder="Nombre Mascota" />
        <input type="text" placeholder="Nombre Dueño" />
        <input type="date" />
        <input type="time" />
        <textarea placeholder="Síntomas"></textarea>
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;