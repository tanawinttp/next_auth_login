import { auth } from "@/auth";

import { handleSignOut } from "@/actions/signout";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form action={handleSignOut}>
        <Button variant={"destructive"} type="submit">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
