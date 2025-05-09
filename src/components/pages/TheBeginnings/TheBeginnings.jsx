import "./TheBeginnings.css";

import { theBeginningsData } from "../../../data/theBeginningsData";
import GallerySectionLayout from "../../templates/GallerySectionLayout";

const TheBeginnings = () => {
  console.log("the Beginnings");

  const { title, subtitle, description, slug, path } = theBeginningsData[0];

  const images = theBeginningsData.flatMap((i) => i.images);

  return (
    <section id={slug} className="site-the-beginnings">
      <GallerySectionLayout
        title={title}
        subtitle={subtitle}
        description={description}
        images={images}
        note={true}
        routeBase={path}
      ></GallerySectionLayout>
    </section>
  );
};

export default TheBeginnings;
