import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ChannelsStepProps {
  channels: string[];
  handleChannelChange: (index: number, value: string) => void;
  handleAddChannel: () => void;
  handleRemoveChannel: (index: number) => void;
  onFinalSubmit: () => void;
}

export const ChannelsStep = ({
  channels,
  handleChannelChange,
  handleAddChannel,
  handleRemoveChannel,
  onFinalSubmit,
}: ChannelsStepProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {channels.map((channel, index) => (
          <div key={index} className="space-y-2">
            <Label htmlFor={`channel${index}`}>Channel {index + 1}</Label>
            <div className="flex items-center space-x-2">
              <Input
                id={`channel${index}`}
                type="text"
                placeholder="e.g., General, Marketing"
                value={channel}
                onChange={(e) => handleChannelChange(index, e.target.value)}
              />
              {channels.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                  onClick={() => handleRemoveChannel(index)}
                >
                  X
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {channels.length < 3 && (
        <Button
          variant="outline"
          onClick={handleAddChannel}
          className="w-full"
        >
          Add Another Channel
        </Button>
      )}
      <Button
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        onClick={onFinalSubmit}
        disabled={!channels.some((channel) => channel.trim() !== "")}
      >
        Create Workspace
      </Button>
    </div>
  );
};
