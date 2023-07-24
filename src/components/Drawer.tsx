"use client";
import "./_Drawer.scss";
import React from "react";

type DrawerProps = {
  openContent: React.ReactNode;
  closedContent: React.ReactNode;
};

export default function Drawer({ openContent, closedContent }: DrawerProps) {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="Drawer" aria-expanded={isOpen}>
      <button
        className="trigger"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {closedContent}
      </button>
      {isOpen && <div className="open-content">{openContent}</div>}
    </div>
  );
}
