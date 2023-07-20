"use client";
import "./Drawer.scss";
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
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {closedContent}
      </button>
      {isOpen && <div>{openContent}</div>}
    </div>
  );
}
