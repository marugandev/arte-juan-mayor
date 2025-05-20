import "./ArtisticProject.css";
import Quote from "../../molecules/Quote/Quote";

const ArtisticProject = () => {
  return (
    <section id="proyecto-artistico" className="site-artistic-project">
      <div className="text column-newspaper">
        <h2 className="title">Proyecto artístico</h2>
        <p>
          La <span className="mark">idea</span> que me ha guiado en la
          realización de la mayor parte de mis pinturas (excepto retratos,
          paisajes y representaciones abstractas y geométricas) es la de{" "}
          <span className="mark">encontrar el equilibrio o la fusión</span>{" "}
          entre la <span className="mark">representación del mundo real</span>{" "}
          (tal como lo vemos) y la{" "}
          <span className="mark">representación de un mundo abstracto</span>{" "}
          (creado por la mente tal como lo podemos imaginar). siempre{" "}
          <span className="mark">a través</span>, como no puede ser de otro
          modo, de una gran variedad de{" "}
          <span className="mark">formas y colores</span>.
        </p>
        <p>
          Empecé pensando que este objetivo era fruto de una inspiración
          personal pero, sobre todo, en los últimos años he ido descubriendo que
          muchas mentes y algunos pintores se han acercado con menor o mayor
          profundidad a esta idea, a este objetivo.
        </p>
        <p>Véase lo que digo en algunas citas:</p>
        <Quote author="Fernando Leger">
          La obra plástica es el estado equívoco de estos dos valores: lo real y
          lo imaginado.
        </Quote>
        <Quote author="Picasso">
          Yo pinto las cosas no como las veo, sino como las pienso.
        </Quote>
        <Quote
          author="Honoré
      de Balzac"
        >
          La misión del arte no es copiar la naturaleza sino expresarla.
        </Quote>
        <Quote author="Jean Guichard-Meili">
          Un cuadro abstracto puede tener analogía con la naturaleza, con tal
          que ésta se vea desde lo alto". "La naturaleza aparece cada vez más
          rica a medida que se consigue sondearla más profundamente, por
          ejemplo, a nivel molecular o atómico o telescópico o de una nueva
          perspectiva.
        </Quote>
        <Quote
          author="Hokusai"
          extra=' (podíamos hacer nuestro comentario: "Lo abstracto bajo la máscara de lo real").'
        >
          Lo más difícil es precisamente alcanzar el íntimo misterio de las
          cosas, descubrir lo extraordinario bajo la máscara de lo ordinario.
        </Quote>
        <Quote
          author="Antonio Machado"
          extra=' ("la" es la belleza,
        la realidad, la verdad, la idea..., vale también para mi idea y mi
        objetivo).'
        >
          Por todas partes la busco sin encontrarlas jamás, y en todas partes la
          encuentro solo por irla a buscar
        </Quote>
        <Quote author={"Jaques Guillerme"}>
          Entre ciertos cuadros y ciertas fotografías la vacilación está
          permitida, porque todo está en la naturaleza, incluso las formas que
          los primeros pintores no figurativos creian haber inventado.
        </Quote>
        <Quote author={"Daniel Behrman"}>
          Las cristalizaciones de cuerpos químicos comunes dan lugar a las
          fotografías más bellas de todas cuantas se toman bajo el microscopio.
          Algunas de ellas son tan inusitadas que ciertos artistas modernos las
          han elegido como elemento de inspiración para sus pinturas abstractas.
        </Quote>
      </div>
      <div className="bento-grid">
        <img
          src="/images/artistic_project/artistic_project_1.webp"
          alt="material de pintura"
          loading="lazy"
        />
        <img
          src="/images/artistic_project/artistic_project_2.webp"
          alt="material de pintura"
          loading="lazy"
        />
        <img
          src="/images/artistic_project/artistic_project_3.webp"
          alt="material de pintura"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ArtisticProject;
