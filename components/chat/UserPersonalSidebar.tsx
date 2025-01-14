import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Mail, Phone, Globe, MapPin, Calendar, Settings, Bell, User, Building2 } from "lucide-react";

export default function UserPersonalSidebar({
  user,
  onClose,
  onEdit,
}: {
  user: any;
  onClose: () => void;
  onEdit: () => void;
}) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isNotificationDialogOpen, setIsNotificationDialogOpen] = useState(false);
  const [privacySettings, setPrivacySettings] = useState({
    showEmail: true,
    showPhone: true,
    showLocation: true,
    showTimezone: true,
    showDepartment: true,
  });
  const [notificationSettings, setNotificationSettings] = useState({
    directMessages: true,
    mentions: true,
    teamUpdates: true,
    channelMessages: false,
    emailNotifications: true,
    desktopNotifications: true,
    soundEnabled: true,
  });
  const [profileData, setProfileData] = useState({
    displayName: user.name || "",
    username: user.username || "",
    phone: user.phone || "",
    department: user.dept || "",
    position: user.position || "",
  });

  const departments = [
    "Engineering",
    "Product",
    "Design",
    "Marketing",
    "Sales",
    "Customer Support",
    "HR",
    "Finance",
  ];

  const handlePrivacyChange = (setting: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleNotificationChange = (setting: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleProfileUpdate = () => {
    // Here you would typically make an API call to update the user's profile
    console.log("Updated profile:", profileData);
    setIsEditDialogOpen(false);
  };

  return (
    <>
      <div className="w-[25%] border-l border-gray-200 dark:border-gray-700 bg-gradient-to-b from-purple-50/80 via-gray-50/80 to-white/80 dark:from-gray-800/80 dark:via-gray-900/80 dark:to-black/80 backdrop-blur-sm p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-2xl font-semibold text-violet-600 dark:text-violet-400">
              {user.name.split(" ").map((n: string) => n[0]).join("")}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user.status}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-violet-100 dark:hover:bg-violet-900/20"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-grow space-y-8 overflow-y-auto">
          {/* About Section */}
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-4">About</h3>
            <div className="space-y-4">
              {privacySettings.showEmail && (
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{user.email || "email@example.com"}</p>
                </div>
              )}
              {privacySettings.showPhone && (
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{profileData.phone || "+1 234 567 890"}</p>
                </div>
              )}
              {privacySettings.showTimezone && (
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{user.timezone || "UTC-5 (Eastern Time)"}</p>
                </div>
              )}
              {privacySettings.showLocation && (
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{user.location || "New York, USA"}</p>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                <p className="text-sm text-gray-700 dark:text-gray-300">Joined {user.joinedDate || "January 2024"}</p>
              </div>
            </div>
          </div>

          {/* Department Info */}
          {privacySettings.showDepartment && (
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-4">Department</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Department:</span> {profileData.department}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Position:</span> {profileData.position}
                </p>
              </div>
            </div>
          )}

          {/* Account Settings */}
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-4">Account Settings</h3>
            <div className="space-y-3">
              <Button 
                className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/20 text-violet-700 dark:text-violet-300"
                onClick={() => setIsNotificationDialogOpen(true)}
              >
                <Bell className="h-4 w-4 mr-2" />
                Notification Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Last updated: {user.lastUpdated}
          </p>
        </div>
      </div>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profile Information</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4 py-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      value={profileData.displayName}
                      onChange={(e) => setProfileData(prev => ({ ...prev, displayName: e.target.value }))}
                      placeholder="Your display name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={profileData.username}
                      onChange={(e) => setProfileData(prev => ({ ...prev, username: e.target.value }))}
                      placeholder="Your username"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select
                      value={profileData.department}
                      onValueChange={(value) => setProfileData(prev => ({ ...prev, department: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      value={profileData.position}
                      onChange={(e) => setProfileData(prev => ({ ...prev, position: e.target.value }))}
                      placeholder="Your position"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="privacy" className="space-y-4 py-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-email" className="flex flex-col">
                    <span>Show Email</span>
                    <span className="text-sm text-gray-500">Display your email to team members</span>
                  </Label>
                  <Switch
                    id="show-email"
                    checked={privacySettings.showEmail}
                    onCheckedChange={() => handlePrivacyChange('showEmail')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-phone" className="flex flex-col">
                    <span>Show Phone Number</span>
                    <span className="text-sm text-gray-500">Display your phone number to team members</span>
                  </Label>
                  <Switch
                    id="show-phone"
                    checked={privacySettings.showPhone}
                    onCheckedChange={() => handlePrivacyChange('showPhone')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-location" className="flex flex-col">
                    <span>Show Location</span>
                    <span className="text-sm text-gray-500">Display your location to team members</span>
                  </Label>
                  <Switch
                    id="show-location"
                    checked={privacySettings.showLocation}
                    onCheckedChange={() => handlePrivacyChange('showLocation')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-timezone" className="flex flex-col">
                    <span>Show Timezone</span>
                    <span className="text-sm text-gray-500">Display your timezone to team members</span>
                  </Label>
                  <Switch
                    id="show-timezone"
                    checked={privacySettings.showTimezone}
                    onCheckedChange={() => handlePrivacyChange('showTimezone')}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="show-department" className="flex flex-col">
                    <span>Show Department Info</span>
                    <span className="text-sm text-gray-500">Display your department and position</span>
                  </Label>
                  <Switch
                    id="show-department"
                    checked={privacySettings.showDepartment}
                    onCheckedChange={() => handlePrivacyChange('showDepartment')}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleProfileUpdate}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Notification Settings Dialog */}
      <Dialog open={isNotificationDialogOpen} onOpenChange={setIsNotificationDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Notification Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="direct-messages" className="flex flex-col">
                  <span>Direct Messages</span>
                  <span className="text-sm text-gray-500">Get notified for direct messages</span>
                </Label>
                <Switch
                  id="direct-messages"
                  checked={notificationSettings.directMessages}
                  onCheckedChange={() => handleNotificationChange('directMessages')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="mentions" className="flex flex-col">
                  <span>Mentions</span>
                  <span className="text-sm text-gray-500">Get notified when mentioned</span>
                </Label>
                <Switch
                  id="mentions"
                  checked={notificationSettings.mentions}
                  onCheckedChange={() => handleNotificationChange('mentions')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="team-updates" className="flex flex-col">
                  <span>Team Updates</span>
                  <span className="text-sm text-gray-500">Get notified for team announcements</span>
                </Label>
                <Switch
                  id="team-updates"
                  checked={notificationSettings.teamUpdates}
                  onCheckedChange={() => handleNotificationChange('teamUpdates')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="channel-messages" className="flex flex-col">
                  <span>Channel Messages</span>
                  <span className="text-sm text-gray-500">Get notified for all channel messages</span>
                </Label>
                <Switch
                  id="channel-messages"
                  checked={notificationSettings.channelMessages}
                  onCheckedChange={() => handleNotificationChange('channelMessages')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="flex flex-col">
                  <span>Email Notifications</span>
                  <span className="text-sm text-gray-500">Receive notifications via email</span>
                </Label>
                <Switch
                  id="email-notifications"
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={() => handleNotificationChange('emailNotifications')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="desktop-notifications" className="flex flex-col">
                  <span>Desktop Notifications</span>
                  <span className="text-sm text-gray-500">Show desktop notifications</span>
                </Label>
                <Switch
                  id="desktop-notifications"
                  checked={notificationSettings.desktopNotifications}
                  onCheckedChange={() => handleNotificationChange('desktopNotifications')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sound-enabled" className="flex flex-col">
                  <span>Notification Sounds</span>
                  <span className="text-sm text-gray-500">Play sounds for notifications</span>
                </Label>
                <Switch
                  id="sound-enabled"
                  checked={notificationSettings.soundEnabled}
                  onCheckedChange={() => handleNotificationChange('soundEnabled')}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}