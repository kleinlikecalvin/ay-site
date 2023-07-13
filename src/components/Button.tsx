import React from "react";
import "./_Button.scss";
type ButtonProps = React.PropsWithChildren<{
  bgColor: string;
  textColor: string;
}>;
export default function Button({ bgColor, textColor, children }: ButtonProps) {
  return (
    <button
      className="Button"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
