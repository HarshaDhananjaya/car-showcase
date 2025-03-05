import { PrismaClient } from "@prisma/client";

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Extend the global object to include the prisma instance
const globalForPrisma = global as unknown as { prisma: typeof prisma };

// In development, store the prisma instance globally to prevent multiple instances
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Export the prisma instance for use in the application
export default prisma;
