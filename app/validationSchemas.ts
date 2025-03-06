import { z } from "zod";

// Define the create Issue schema for validating the request body
export const createIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Tiltle is required.")
    .max(150, "Title must not exceed 150 characters."), // Title must be between 1 and 150 characters
  description: z
    .string()
    .min(1, "Description is required.")
    .max(150, "Description must not exceed 500 characters."), // Description must be at least 1 character
});
