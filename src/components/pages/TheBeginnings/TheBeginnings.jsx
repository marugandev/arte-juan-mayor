import "./TheBeginnings.css";

import { theBeginningsData } from "../../../data/theBeginningsData";
import GallerySectionLayout from "../../templates/GallerySectionLayout";

const TheBeginnings = () => {
  const { title, subtitle, description, slug } = theBeginningsData[0];

  const images = theBeginningsData.flatMap((i) => i.images);

  return (
    <section id={slug} className="site-the-beginnings">
      <GallerySectionLayout
        title={title}
        subtitle={subtitle}
        description={description}
        images={images}
        note
      ></GallerySectionLayout>
    </section>
  );
};

export default TheBeginnings;
