import React from "react";
import { createPortal } from "react-dom";

export default function Portal({ onClose, children }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div
      onClick={handleClick}
      className="fixed inset-0 z-50 backdrop-blur flex bg-[#0000006a]"
    >
      {children}
    </div>,
    document.body
  );
}
