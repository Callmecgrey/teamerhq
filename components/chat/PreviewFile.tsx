// components/chat/PreviewFile.tsx
import React from "react";

type PreviewFileProps = {
  file: { name: string; content: string };
  onClose: () => void;
};

export default function PreviewFile({ file, onClose }: PreviewFileProps) {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-semibold">{file.name}</h2>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <pre className="bg-gray-100 p-4 rounded">{file.content}</pre>
      </div>
    </div>
  );
}
