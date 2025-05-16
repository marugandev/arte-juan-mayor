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
        src="/videos/slideshow_artejuanmayor_480_vf_short.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Slideshow;
