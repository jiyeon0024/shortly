import { Children } from "react";
import "./Button.style.css";

function Button(props) {
  return <button className={`btn ${props.className}`}>{props.children}</button>;
}

export default Button;
