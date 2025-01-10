// components/ui/modal.tsx
import React, { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null; 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <span className="sr-only">Close</span>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
