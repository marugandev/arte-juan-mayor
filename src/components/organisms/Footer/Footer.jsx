import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>{new Date().getFullYear()} © artejuanmayor | Creado por</p>
      <a
        className="site-footer-link"
        href="https://marugandev.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="site-footer-logo"
          src="/images/logos/logo_marugandev.svg"
          alt="logo marugandev"
        />
      </a>
    </footer>
  );
};

export default Footer;
