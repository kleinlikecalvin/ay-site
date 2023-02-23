import React from "react";
import "./Button.scss";
export default function Button({ color, children }) {
  return (
    <button className="Button" style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}
