import "./Slideshow.css";

const Slideshow = () => {
  return (
    <video autoPlay loop muted playsInline className="slideshow">
      <source
        src="https://res.cloudinary.com/cloudcloudinary0/video/upload/v1745622574/arte_juan_mayor/lx30uw69thhdq2hxpfl2.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Slideshow;
