import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

async function main() {
  const password = await bcrypt.hash("password123", 10);

  await prisma.user.upsert({
    where: {
      email: "admin@kampus.ac.id",
    },
    update: {},
    create: {
      email: "admin@kampus.ac.id",
      password,
      role: "ADMIN",
    },
  });

  console.log("Admin created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
