// components/chat/PreviewFile.tsx
import { X, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type PreviewFileProps = {
  file: { 
    name: string; 
    content: string;
    type?: string;
    size?: string;
    lastModified?: string;
  };
  onClose: () => void;
};

export default function PreviewFile({ file, onClose }: PreviewFileProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl h-[80vh] flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 p-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{file.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {file.size && `${file.size} • `}
              {file.lastModified && `Last modified: ${file.lastModified}`}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
              onClick={() => console.log("Share file")}
            >
              <Share2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
              onClick={() => console.log("Download file")}
            >
              <Download className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
              onClick={onClose}
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm text-gray-900 dark:text-white font-mono">
            {file.content}
          </pre>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <Button
            variant="outline"
            className="w-full bg-violet-100 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:bg-violet-200 dark:hover:bg-violet-900/40 text-violet-700 dark:text-violet-300"
            onClick={() => console.log("Open in new tab")}
          >
            Open in New Tab
          </Button>
        </div>
      </div>
    </div>
  );
}