import { FileText, Image, Lock, Unlock, Upload, Folder, MoreVertical, Video, Mic } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function FilesSidebar({ onClose, onFileSelect }: { 
  onClose: () => void;
  onFileSelect: (file: any) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [pin, setPin] = useState("");
  const [isEditingFileName, setIsEditingFileName] = useState<string | null>(null);
  const [editedFileName, setEditedFileName] = useState("");
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({
    images: false,
    docs: false,
    videos: false,
    meetingNotes: false,
  });
  type FileType = {
    id: string;
    name: string;
    size: string;
    uploadedAt: string;
    type: string;
    url: string;
    content: string;
  };

  type FilesState = {
    images: FileType[];
    docs: FileType[];
    videos: FileType[];
    meetingNotes: FileType[];
    [key: string]: FileType[];
  };

  const [files, setFiles] = useState<FilesState>({
    images: [
      { 
        id: "img1",
        name: "Image.png", 
        size: "1.5 MB", 
        uploadedAt: "Yesterday", 
        type: "image", 
        url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
        content: "Image preview content"
      },
      { 
        id: "img2",
        name: "Screenshot.png", 
        size: "2 MB", 
        uploadedAt: "Today", 
        type: "image", 
        url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
        content: "Screenshot preview content"
      },
    ],
    docs: [
      { 
        id: "doc1",
        name: "Document.pdf", 
        size: "2 MB", 
        uploadedAt: "Today", 
        type: "pdf", 
        url: "/path/to/document.pdf",
        content: "Sample PDF document content..."
      },
      { 
        id: "doc2",
        name: "Report.docx", 
        size: "3 MB", 
        uploadedAt: "Last week", 
        type: "docx", 
        url: "/path/to/report.docx",
        content: "Sample DOCX report content..."
      },
    ],
    videos: [
      { 
        id: "vid1",
        name: "Video.mp4", 
        size: "10 MB", 
        uploadedAt: "Last month", 
        type: "video", 
        url: "https://example.com/video.mp4",
        content: "Video content preview"
      },
      { 
        id: "vid2",
        name: "Tutorial.mp4", 
        size: "15 MB", 
        uploadedAt: "Last week", 
        type: "video", 
        url: "https://example.com/tutorial.mp4",
        content: "Tutorial video content preview"
      },
    ],
    meetingNotes: [
      {
        id: "meet1",
        name: "Team Meeting - Jan 15.mp4",
        size: "25 MB",
        uploadedAt: "2 weeks ago",
        type: "video",
        url: "https://example.com/meeting-jan15.mp4",
        content: "Team meeting recording"
      },
      {
        id: "meet2",
        name: "Client Call - Jan 20.mp4",
        size: "18 MB",
        uploadedAt: "1 week ago",
        type: "video",
        url: "https://example.com/client-call-jan20.mp4",
        content: "Client call recording"
      }
    ]
  });
  const [totalSize, setTotalSize] = useState(36.5);

  const handleUnlock = () => {
    if (pin === "1234") {
      setIsLocked(false);
      setPin("");
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    const newFilesData = newFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      uploadedAt: "Just now",
      type: file.type.split("/")[1],
      url: URL.createObjectURL(file),
      content: "New file content"
    }));

    newFilesData.forEach((file) => {
      if (file.type === "pdf" || file.type === "docx") {
        setFiles((prevState) => ({
          ...prevState,
          docs: [...prevState.docs, file],
        }));
      } else if (file.type === "image") {
        setFiles((prevState) => ({
          ...prevState,
          images: [...prevState.images, file],
        }));
      } else if (file.type === "video") {
        setFiles((prevState) => ({
          ...prevState,
          videos: [...prevState.videos, file],
        }));
      }
    });

    const newTotalSize = totalSize + newFiles.reduce((acc, file) => acc + file.size / (1024 * 1024), 0);
    setTotalSize(newTotalSize);
  };

  const toggleFolder = (folderType: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderType]: !prev[folderType],
    }));
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-6 h-6 text-violet-500 dark:text-violet-400" />;
      case "image":
        return <Image className="w-6 h-6 text-violet-500 dark:text-violet-400" />;
      case "video":
        return <Video className="w-6 h-6 text-violet-500 dark:text-violet-400" />;
      case "docx":
        return <FileText className="w-6 h-6 text-violet-500 dark:text-violet-400" />;
      default:
        return <FileText className="w-6 h-6 text-violet-500 dark:text-violet-400" />;
    }
  };

  const handleFileClick = (file: any) => {
    if (!isLocked) {
      onFileSelect(file);
    }
  };

  const handleFileAction = (action: string, file: any, folderType: string) => {
    switch (action) {
      case "open":
        handleFileClick(file);
        break;
      case "rename":
        setIsEditingFileName(file.id);
        setEditedFileName(file.name);
        break;
      case "share":
        console.log("Share file:", file.name);
        break;
      case "delete":
        setFiles(prev => ({
          ...prev,
          [folderType]: prev[folderType].filter(f => f.id !== file.id)
        }));
        break;
    }
  };

  const handleRename = (folderType: string, fileId: string) => {
    if (editedFileName.trim()) {
      setFiles(prev => ({
        ...prev,
        [folderType]: prev[folderType].map(file =>
          file.id === fileId ? { ...file, name: editedFileName } : file
        )
      }));
      setIsEditingFileName(null);
      setEditedFileName("");
    }
  };

  const renderFileItem = (file: any, folderType: string) => (
    <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg flex justify-between items-center hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-all">
      <div 
        className="flex items-center space-x-3 flex-1 cursor-pointer"
        onClick={() => !isEditingFileName && handleFileClick(file)}
      >
        {getFileIcon(file.type)}
        <div className="flex-1">
          {isEditingFileName === file.id ? (
            <div className="flex items-center gap-2">
              <Input
                value={editedFileName}
                onChange={(e) => setEditedFileName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleRename(folderType, file.id);
                  }
                }}
                className="h-7 py-1"
                autoFocus
              />
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleRename(folderType, file.id)}
              >
                Save
              </Button>
            </div>
          ) : (
            <>
              <p className="font-medium text-gray-900 dark:text-white">{file.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {file.size} • {file.uploadedAt}
              </p>
            </>
          )}
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => handleFileAction("open", file, folderType)}>
            Open
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleFileAction("rename", file, folderType)}>
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleFileAction("share", file, folderType)}>
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleFileAction("delete", file, folderType)}
            className="text-red-600 dark:text-red-400"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <div className="w-[25%] border-l border-gray-200 dark:border-gray-700 bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm p-6 flex flex-col h-full relative">
      {/* Lock Overlay - Now only covers the file section */}
      {isLocked && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
            <div className="text-center space-y-4">
              <Lock className="w-10 h-10 text-violet-500 dark:text-violet-400 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Files are Locked</h3>
              
              <div className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter 4-digit PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  maxLength={4}
                  className="text-center text-lg tracking-widest"
                  autoFocus
                />
                <Button 
                  onClick={handleUnlock}
                  className="w-full"
                  variant="default"
                >
                  Unlock Files
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Files</h2>

        {/* Upload Button */}
        <label htmlFor="file-upload" className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
          <Upload className="w-5 h-5" />
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
          multiple
        />
      </div>

        {/* Search Bar */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search files"
          className="mb-4 p-2 rounded-md w-full bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />

        {/* File Grouping */}
        <div className="space-y-4 overflow-y-auto flex-grow">
          {Object.entries(files).map(([folderType, folderFiles]) => (
            <div key={folderType}>
              <div
                className="flex justify-between items-center cursor-pointer hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                onClick={() => toggleFolder(folderType)}
              >
                <div className="flex items-center space-x-3">
                  <Folder className="w-6 h-6 text-violet-500 dark:text-violet-400" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {folderType === "meetingNotes" ? "Meeting Notes" : folderType.charAt(0).toUpperCase() + folderType.slice(1)}
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  {openFolders[folderType] ? "-" : "+"}
                </span>
              </div>
              {openFolders[folderType] && (
                <div className="ml-6 mt-2 space-y-2">
                  {folderFiles.map((file, index) => (
                    <div key={file.id}>
                      {renderFileItem(file, folderType)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Section */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          {/* Lock/Unlock Files Section - Simplified to just button */}
          <button
            onClick={() => setIsLocked(!isLocked)}
            className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            {isLocked ? (
              <>
                <Unlock className="w-5 h-5" />
                <span className="text-sm">Unlock Files</span>
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                <span className="text-sm">Lock Files</span>
              </>
            )}
          </button>

          {/* Total File Size */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>Total used: {totalSize.toFixed(2)} MB</span>
          </div>
        </div>
      </div>
    </div>
  );
}