"use client";

import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button, TextArea, TextField } from "@radix-ui/themes";

/**
 * @description NewIssuePage is a client-side page that displays a form for creating a new issue.
 * @returns A JSX element with a form containing
 * TextField for the title
 * TextArea for the description
 * Submit button.
 */
const NewIssuePage = () => {
  return (
    <div className="space-y-3">
      {/* TextField for the issue title with a Pencil icon */}
      <TextField.Root radius="large" placeholder="Title">
        <TextField.Slot>
          <Pencil1Icon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      {/* TextArea for the issue description */}
      <TextArea placeholder="Description" />

      {/* Submit button for creating the new issue */}
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
