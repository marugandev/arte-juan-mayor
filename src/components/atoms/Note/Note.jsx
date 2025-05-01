import "./Note.css";

const Note = ({
  text = "*Para visualizar las obras completas hacer clic sobre las mismas."
}) => <p className="note">{text}</p>;

export default Note;
