import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((e) => {
    console.log("Error connecting to the database", e);
  });

process.on("SIGINT", () => prisma.$disconnect());
