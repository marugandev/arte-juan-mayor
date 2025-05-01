import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="page-not-found">
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <button
        className="button"
        aria-label="Volver a la página anterior"
        onClick={() => window.history.back()}
      >
        <span className="arrow">←</span>
        <span className="text">Volver</span>
      </button>
    </section>
  );
};

export default NotFound;
