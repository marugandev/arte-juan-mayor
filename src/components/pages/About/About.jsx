import "./About.css";

const About = () => {
  return (
    <section id="juan-mayor" className="site-about">
      <div className="img-container">
        <img
          src="/images/about/juan_mayor.webp"
          alt="Juan Mayor"
          loading="lazy"
        />
      </div>
      <div className="text-container column-newspaper">
        <h2 className="title">Juan Mayor</h2>
        <p>Nació en Salamanca el 25 de abril de 1931.</p>
        <p>
          Se licenció en Filosofía y Letras (Filología Románica), en Filosofía y
          en Derecho; estudió periodismo y magisterio; se doctoró con premio
          extraordinario en filología Hispánica. Fue profesor de Filosofía en
          Institutos de Enseñanza Media, catedrático de Filosofía, Psicología y
          Sociología de la Educación en Escuelas Normales; y profesor adjunto de
          Psicología y catedrático de Psicología del Pensamiento y del Lenguaje
          en la Facultad de Psicología de la Universidad Complutense.
        </p>
        <p>
          Su afición por las artes y la cultura tue tan variada como intensa;
          dirigió el teatro Español Universitario; cofundó el cine-club de
          Salamanca; participó en exposiciones de pintura y escultura; dirigió
          alqunas revistas y escribió en ellas y en muchas más.
        </p>
        <p>
          En el ambito profesional ha dirigido numerosos proyectos editoriales y
          ha escrito y colaborado en innumerables manuales y tratados (por
          ejemplo dirigió con J.L. Pinillos el Tratado de Psicologia General en
          12 volumenes, obra pionera en España). Una antología de algunos de sus
          trabajos e investigaciones puede verse en el homenaje que la
          Universidad Complutense le dedicó con motivo de su jubilación. Juan
          Mayor "La actividad humana. Un incierto camino entre la necesidad y la
          posibilidad". Madrid, Editorial Complutense, 2009.
        </p>
      </div>
    </section>
  );
};

export default About;
