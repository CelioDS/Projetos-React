import { Link } from "react-router-dom";
import style from "./LinkButton.module.css";

export default function LinkButton({ to, text, className }) {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
}

LinkButton.defaultProps = {
  //valores padroa
  className: style.btn,
};
