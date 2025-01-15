import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users, Globe, Link, Copy, Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

interface ShareFileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fileName: string;
}

export default function ShareFileDialog({
  open,
  onOpenChange,
  fileName,
}: ShareFileDialogProps) {
  const [copied, setCopied] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);

  const mockChannels = [
    { id: "1", name: "general", type: "channel" },
    { id: "2", name: "team-updates", type: "channel" },
    { id: "3", name: "project-x", type: "channel" },
  ];

  const mockPeople = [
    { id: "1", name: "John Doe", role: "Developer" },
    { id: "2", name: "Jane Smith", role: "Designer" },
    { id: "3", name: "Mike Johnson", role: "Product Manager" },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://example.com/shared/file123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const togglePersonSelection = (id: string) => {
    setSelectedPeople((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Share {fileName}</DialogTitle>
          <DialogDescription>
            Share this file with team members or get a shareable link
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="internal" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="internal">
              <Users className="w-4 h-4 mr-2" />
              Internal
            </TabsTrigger>
            <TabsTrigger value="external">
              <Globe className="w-4 h-4 mr-2" />
              External
            </TabsTrigger>
          </TabsList>

          <TabsContent value="internal" className="space-y-4">
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search people or channels..." />
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup heading="Channels">
                {mockChannels?.length > 0 ? (
                  mockChannels.map((channel) => (
                    <CommandItem
                      key={channel.id}
                      onSelect={() =>
                        console.log(`Selected channel: ${channel.name}`)
                      }
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <span className="text-violet-500 dark:text-violet-400">
                        #
                      </span>
                      <span>{channel.name}</span>
                    </CommandItem>
                  ))
                ) : (
                  <CommandEmpty>No channels available.</CommandEmpty>
                )}
              </CommandGroup>

              <CommandGroup heading="People">
                {mockPeople?.length > 0 ? (
                  mockPeople.map((person) => (
                    <CommandItem
                      key={person.id}
                      onSelect={() => togglePersonSelection(person.id)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                          {person.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{person.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {person.role}
                          </p>
                        </div>
                      </div>
                      {selectedPeople.includes(person.id) && (
                        <Check className="w-4 h-4 text-green-500" />
                      )}
                    </CommandItem>
                  ))
                ) : (
                  <CommandEmpty>No people available.</CommandEmpty>
                )}
              </CommandGroup>
            </Command>

            <Button className="w-full">Share with selected</Button>
          </TabsContent>

          <TabsContent value="external" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Shareable Link</label>
                <div className="flex space-x-2">
                  <Input
                    readOnly
                    value="https://example.com/shared/file123"
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopyLink}
                    className="shrink-0"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Link Settings</label>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      Anyone with the link can view
                    </span>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Link expires in 7 days</span>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
