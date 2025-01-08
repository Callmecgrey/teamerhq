// components/chat/MessagesList.tsx
export default function MessagesList({ onMessageClick }: { onMessageClick: (message: any) => void }) {
    return (
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          <div
            className="flex items-start space-x-3 hover:bg-muted/50 p-2 rounded-lg cursor-pointer"
            onClick={() =>
              onMessageClick({
                user: "John Doe",
                time: "12:34 PM",
                content: "Hello team! How's everyone doing?",
              })
            }
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              JD
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-medium hover:underline">John Doe</span>
                <span className="text-xs text-muted-foreground">12:34 PM</span>
              </div>
              <p className="text-sm">Hello team! How's everyone doing?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  