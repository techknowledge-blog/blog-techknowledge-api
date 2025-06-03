import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedCategories() {
  const CATEGORY_REFLEXION = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: { name: 'reflexões' },
  });

  const CATEGORY_OLYMPIAD = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: { name: 'olimpíada' },
  });

  const CATEGORY_TECHKNOWLEDGE = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: { name: 'techknowledge' },
  });

  const CATEGORY_JAVASCRIPT = await prisma.category.upsert({
    where: { id: 4 },
    update: {},
    create: { name: 'JavaScript' },
  });

  const CATEGORY_CHALLENGE = await prisma.category.upsert({
    where: { id: 5 },
    update: {},
    create: { name: 'challenges' },
  });

  const CATEGORY_CLOUDCOMPUTING = await prisma.category.upsert({
    where: { id: 6 },
    update: {},
    create: { name: 'cloud computing' },
  });

  const CATEGORY_MOBILE = await prisma.category.upsert({
    where: { id: 7 },
    update: {},
    create: { name: 'Mobile' },
  });

  const CATEGORY_CAREER = await prisma.category.upsert({
    where: { id: 8 },
    update: {},
    create: { name: 'Carreira' },
  });

  console.log({
    CATEGORY_REFLEXION,
    CATEGORY_OLYMPIAD,
    CATEGORY_TECHKNOWLEDGE,
    CATEGORY_JAVASCRIPT,
    CATEGORY_CHALLENGE,
    CATEGORY_CLOUDCOMPUTING,
    CATEGORY_MOBILE,
    CATEGORY_CAREER,
  });
}
