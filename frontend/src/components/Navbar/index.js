import React from "react";
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
  const { goBack } = useHistory();

  return (
    <div className="navbar">
      <button type="button" onClick={goBack}>
        Voltar
      </button>
      <h1>{props.title}</h1>
    </div>
  );
}
