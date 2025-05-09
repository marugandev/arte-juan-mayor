import "./Slideshow.css";

const Slideshow = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      /* controls
      controlsList="nodownload noplaybackrate" */
      className="slideshow"
    >
      <source
        src="https://res.cloudinary.com/cloudcloudinary0/video/upload/v1746781525/slideshow_hdmqcp.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Slideshow;
