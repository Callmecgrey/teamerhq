export default function FilesSidebar({ onClose }: { onClose: () => void }) {
    const files = [
      { name: "Document.pdf", size: "2 MB", uploadedAt: "Today" },
      { name: "Image.png", size: "1.5 MB", uploadedAt: "Yesterday" },
      { name: "Report.docx", size: "3 MB", uploadedAt: "Last week" },
    ];
  
    return (
      <div className="w-[25%] border-l bg-card p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Files</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            Close
          </button>
        </div>
  
        {/* Files List */}
        <div className="space-y-4 overflow-y-auto flex-grow">
          {files.map((file, index) => (
            <div
              key={index}
              className="p-3 bg-muted/10 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {file.size} • {file.uploadedAt}
                </p>
              </div>
              <button className="text-muted-foreground hover:text-foreground">Download</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  