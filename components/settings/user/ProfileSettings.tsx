export default function ProfileSettings() {
    return (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="profile-picture">
              Profile Picture
            </label>
            <input type="file" id="profile-picture" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="display-name">
              Display Name
            </label>
            <input
              type="text"
              id="display-name"
              placeholder="Enter your display name"
              className="border rounded-md p-2 w-full"
            />
          </div>
        </form>
      </div>
    );
  }
  