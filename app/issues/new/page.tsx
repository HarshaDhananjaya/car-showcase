"use client";

import { showErrorToast, showSuccessToast } from "@/services/toast-service"; // Import toast utils
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

interface IssueForm {
  title: string;
  description: string;
}

/**
 * @description NewIssuePage is a client-side page that displays a form for creating a new issue.
 * @returns A JSX element with a form containing
 * TextField for the title
 * TextArea for the description
 * Submit button.
 */
const NewIssuePage = () => {
  const router = useRouter();
  // React Hook Form
  const { register, handleSubmit } = useForm<IssueForm>();
  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle form submission
  const onSubmit = async (data: IssueForm) => {
    setIsLoading(true);

    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
      showSuccessToast("Issue created successfully!");
    } catch (error) {
      showErrorToast(
        "There was an error submitting the issue. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      {/* TextField for the issue title with a Pencil icon */}
      <TextField.Root radius="large" placeholder="Title" {...register("title")}>
        <TextField.Slot>
          <Pencil1Icon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      {/* TextArea for the issue description */}
      <TextArea placeholder="Description" {...register("description")} />

      {/* Submit button for creating the new issue */}
      <Button
        type="submit"
        disabled={isLoading}
        className="relative flex items-center gap-2"
      >
        {isLoading && <FaSpinner className="animate-spin" />}
        Submit New Issue
      </Button>
    </form>
  );
};

export default NewIssuePage;
