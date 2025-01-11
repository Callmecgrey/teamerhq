import { FileText, Download, Image, Lock, Unlock, Upload, Share2, Folder } from "lucide-react";
import { useState } from "react";

export default function FilesSidebar({ onClose }: { onClose: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>({
    images: false,
    docs: false,
    videos: false,
  });
  const [files, setFiles] = useState({
    images: [
      { name: "Image.png", size: "1.5 MB", uploadedAt: "Yesterday", type: "image", url: "/path/to/image.png" },
      { name: "Screenshot.png", size: "2 MB", uploadedAt: "Today", type: "image", url: "/path/to/screenshot.png" },
    ],
    docs: [
      { name: "Document.pdf", size: "2 MB", uploadedAt: "Today", type: "pdf", url: "/path/to/document.pdf" },
      { name: "Report.docx", size: "3 MB", uploadedAt: "Last week", type: "docx", url: "/path/to/report.docx" },
    ],
    videos: [
      { name: "Video.mp4", size: "10 MB", uploadedAt: "Last month", type: "video", url: "/path/to/video.mp4" },
      { name: "Tutorial.mp4", size: "15 MB", uploadedAt: "Last week", type: "video", url: "/path/to/tutorial.mp4" },
    ],
  });
  const [totalSize, setTotalSize] = useState(36.5); // Assuming size is in MB
  const [hoveredFile, setHoveredFile] = useState<string | null>(null); // Track the hovered file for preview

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    const newFilesData = newFiles.map((file) => ({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      uploadedAt: "Just now",
      type: file.type.split("/")[1], // Extract the file type
      url: URL.createObjectURL(file),
    }));

    // Group the new files into respective categories based on type
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

    // Recalculate the total size
    const newTotalSize = totalSize + newFiles.reduce((acc, file) => acc + file.size / (1024 * 1024), 0);
    setTotalSize(newTotalSize);
  };

  // Toggle folder visibility
  const toggleFolder = (folderType: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderType]: !prev[folderType],
    }));
  };

  // Helper function to get file icons
  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-6 h-6 text-muted-foreground" />;
      case "image":
        return <Image className="w-6 h-6 text-muted-foreground" />;
      case "video":
        return <Image className="w-6 h-6 text-muted-foreground" />;
      case "docx":
        return <FileText className="w-6 h-6 text-muted-foreground" />;
      default:
        return <FileText className="w-6 h-6 text-muted-foreground" />;
    }
  };

  // Handle file preview on hover
  const handleMouseEnter = (fileName: string) => {
    setHoveredFile(fileName);
  };

  const handleMouseLeave = () => {
    setHoveredFile(null);
  };

  // Render file preview
  const renderFilePreview = (file: { name: string; type: string; url: string }) => {
    if (file.type === "image") {
      return <img src={file.url} alt={file.name} className="w-24 h-24 object-cover" />;
    } else if (file.type === "video") {
      return (
        <video className="w-24 h-24 object-cover" controls>
          <source src={file.url} type="video/mp4" />
        </video>
      );
    } else if (file.type === "pdf" || file.type === "docx") {
      return (
        <div className="text-sm text-muted-foreground">
          <p>Preview not available for this type</p>
        </div>
      );
    }
    return null;
  };

  // Render Share Button
  const renderShareButton = (fileUrl: string) => (
    <button
      className="text-muted-foreground hover:text-foreground"
      onClick={() => navigator.clipboard.writeText(fileUrl)}
    >
      <Share2 className="w-5 h-5" />
      <span className="sr-only">Share</span>
    </button>
  );

  return (
    <div className="w-[25%] border-l bg-card p-6 flex flex-col h-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Files</h2>

        {/* Upload Button */}
        <label htmlFor="file-upload" className="cursor-pointer text-muted-foreground hover:text-foreground">
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
        className="mb-4 p-2 border rounded-md w-full bg-transparent text-foreground"
      />

      {/* File Grouping */}
      <div className="space-y-4 overflow-y-auto flex-grow">
        {/* Images Group */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFolder("images")}
          >
            <div className="flex items-center space-x-3">
              <Folder className="w-6 h-6 text-muted-foreground" />
              <span className="font-medium">Images</span>
            </div>
            <span className="text-muted-foreground">
              {openFolders.images ? "-" : "+"}
            </span>
          </div>
          {openFolders.images && (
            <div className="ml-6 mt-2 space-y-2">
              {files.images.map((file, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/10 rounded-lg flex justify-between items-center hover:bg-muted/20 transition-all"
                  onMouseEnter={() => handleMouseEnter(file.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center space-x-3">
                    {getFileIcon(file.type)}
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.size} • {file.uploadedAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <Download className="w-5 h-5" />
                      <span className="sr-only">Download</span>
                    </button>
                  </div>
                  {/* Show Preview and Share Button on Hover */}
                  {hoveredFile === file.name && (
                    <div className="absolute top-0 right-0 p-4 bg-gray-900 rounded-lg text-white">
                      {renderFilePreview(file)}
                      {renderShareButton(file.url)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Docs Group */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFolder("docs")}
          >
            <div className="flex items-center space-x-3">
              <Folder className="w-6 h-6 text-muted-foreground" />
              <span className="font-medium">Documents</span>
            </div>
            <span className="text-muted-foreground">
              {openFolders.docs ? "-" : "+"}
            </span>
          </div>
          {openFolders.docs && (
            <div className="ml-6 mt-2 space-y-2">
              {files.docs.map((file, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/10 rounded-lg flex justify-between items-center hover:bg-muted/20 transition-all"
                  onMouseEnter={() => handleMouseEnter(file.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center space-x-3">
                    {getFileIcon(file.type)}
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.size} • {file.uploadedAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <Download className="w-5 h-5" />
                      <span className="sr-only">Download</span>
                    </button>
                  </div>
                  {/* Show Preview and Share Button on Hover */}
                  {hoveredFile === file.name && (
                    <div className="absolute top-0 right-0 p-4 bg-gray-900 rounded-lg text-white">
                      {renderFilePreview(file)}
                      {renderShareButton(file.url)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Videos Group */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFolder("videos")}
          >
            <div className="flex items-center space-x-3">
              <Folder className="w-6 h-6 text-muted-foreground" />
              <span className="font-medium">Videos</span>
            </div>
            <span className="text-muted-foreground">
              {openFolders.videos ? "-" : "+"}
            </span>
          </div>
          {openFolders.videos && (
            <div className="ml-6 mt-2 space-y-2">
              {files.videos.map((file, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/10 rounded-lg flex justify-between items-center hover:bg-muted/20 transition-all"
                  onMouseEnter={() => handleMouseEnter(file.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center space-x-3">
                    {getFileIcon(file.type)}
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.size} • {file.uploadedAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <Download className="w-5 h-5" />
                      <span className="sr-only">Download</span>
                    </button>
                  </div>
                  {/* Show Preview and Share Button on Hover */}
                  {hoveredFile === file.name && (
                    <div className="absolute top-0 right-0 p-4 bg-gray-900 rounded-lg text-white">
                      {renderFilePreview(file)}
                      {renderShareButton(file.url)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center">
          {/* Lock/Unlock Files Section */}
          <button
            onClick={() => setIsLocked(!isLocked)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
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
          <div className="text-sm text-muted-foreground">
            <span>Total used: {totalSize.toFixed(2)} MB</span>
          </div>
        </div>
      </div>
    </div>
  );
}