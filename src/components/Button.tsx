import React from "react";
import "./_Button.scss";
export default function Button({ bgColor, textColor, children }) {
  return (
    <button
      className="Button"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
