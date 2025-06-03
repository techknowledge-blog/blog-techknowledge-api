import { PrismaClient } from '@prisma/client';

import { seedCategories } from './category.seed';
import { seedPosts } from './post.seed';
import { seedUsers } from './user.seed';

const prisma = new PrismaClient();

async function main() {
  await seedUsers();
  await seedCategories();
  await seedPosts();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
