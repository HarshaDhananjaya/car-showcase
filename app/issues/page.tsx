import { Button } from "@radix-ui/themes";
import Link from "next/link";

/**
 * @description IssuePage is a client-side page that displays a button to create a new issue.
 * @returns A JSX element with a Button containing a Link to the new issue page.
 */
const IssuePage = (): JSX.Element => {
  return (
    <div>
      {/* A button to create a new issue */}
      <Button>
        {/* A link to the new issue page */}
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuePage;
