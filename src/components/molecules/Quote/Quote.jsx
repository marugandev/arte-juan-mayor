import "./Quote.css";

const Quote = ({ children, author, extra }) => (
  <blockquote className="quote">
    <p>
      "{children}"{author && <cite className="quote-cite"> — {author}</cite>}
      {extra && <span>{extra}</span>}
    </p>
  </blockquote>
);

export default Quote;
