import { X, Download, Share2, ChevronLeft, ExternalLink, Eye, FileText, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ShareFileDialog from "@/components/switcher/ShareFileDialog";

type PreviewFileProps = {
  file: { 
    name: string; 
    content: string;
    type?: string;
    size?: string;
    lastModified?: string;
    url?: string;
  };
  onClose: () => void;
};

export default function PreviewFile({ file, onClose }: PreviewFileProps) {
  const [showShareDialog, setShowShareDialog] = useState(false);

  const getFileIcon = () => {
    switch (file.type) {
      case "image":
        return <Eye className="h-5 w-5" />;
      case "video":
        return <Film className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const renderContent = () => {
    switch (file.type) {
      case "image":
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-900/50 to-gray-900">
            {file.url && (
              <div className="relative w-full h-full">
                <Image
                  src={file.url}
                  alt={file.name}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            )}
          </div>
        );
      case "video":
        return (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-900/50 to-gray-900">
            <video
              controls
              className="max-w-full max-h-full rounded-lg shadow-lg"
              src={file.url || ""}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        );
      default:
        return (
          <div className="w-full h-full overflow-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-4xl mx-auto p-8">
              <pre className="text-sm text-gray-900 dark:text-white font-mono whitespace-pre-wrap bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                {file.content || "No content available."}
              </pre>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="flex flex-col h-full bg-gradient-to-b from-gray-50 via-gray-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 shadow-sm">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              onClick={onClose}
            >
              <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-full">
                {getFileIcon()}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  {file.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {file.size && `${file.size} • `}
                  {file.lastModified && `Modified ${file.lastModified}`}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2"
              onClick={() => setShowShareDialog(true)}
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2"
              onClick={() => console.log("Download file")}
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
            {file.url && (
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100 dark:hover:bg-gray-700 space-x-2"
                onClick={() => window.open(file.url, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                <span>Open</span>
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {renderContent()}
        </div>
      </div>

      <ShareFileDialog
        open={showShareDialog}
        onOpenChange={setShowShareDialog}
        fileName={file.name}
      />
    </>
  );
}