import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define the create Issue schema for validating the request body
const createIssueSchema = z.object({
  title: z.string().min(1).max(150), // Title must be between 1 and 150 characters
  description: z.string().min(1), // Description must be at least 1 character
});

/**
 * @description Create a new issue
 * @param {NextRequest} request - The incoming request object
 * @returns {Promise<NextResponse>} - JSON response with the created issue or error
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  // Parse and validate the request body
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    // Return a 400 response if validation fails
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Attempt to create a new issue in the database
  return prisma.issue
    .create({
      data: {
        title: body.title,
        description: body.description,
      },
    })
    .then((issue) => NextResponse.json(issue)) // Return the created issue as a response
    .catch((error) => NextResponse.json(error, { status: 500 })); // Return a 500 response on error
}
