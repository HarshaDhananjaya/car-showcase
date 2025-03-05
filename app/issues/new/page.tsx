"use client";

import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

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

      {/* SimpleMDE editor for the issue description */}
      <SimpleMDE
        options={{
          status: false, // Removes line/word count section
        }}
        placeholder="Description"
      />

      {/* Submit button for creating the new issue */}
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
