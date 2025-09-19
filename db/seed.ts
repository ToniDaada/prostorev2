import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

/**
 * The function uses Prisma to delete existing products and create new products from sample data in a
 * database.
 */
async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.user });

  console.log(`Database seeded Successfuly`);
}

main();
