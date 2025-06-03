import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedUsers() {
  const mikkaiser = await prisma.user.upsert({
    where: { email: 'mikaelrsimoes19@gmail.com' },
    update: {},
    create: {
      name: 'Mikael Ribeiro',
      email: 'mikaelrsimoes19@gmail.com',
      function: 'Desenvolvedor Full Stack',
    },
  });

  const leticia = await prisma.user.upsert({
    where: { email: 'contatoleticiadia@gmail.com' },
    update: {},
    create: {
      name: 'Leticia Dias',
      email: 'contatoleticiadia@gmail.com',
      function: 'Desenvolvedora Full Stack',
    },
  });

  const monique = await prisma.user.upsert({
    where: { email: 'nickyalbuquerque2008@gmail.com' },
    update: {},
    create: {
      name: 'Monique Campos',
      email: 'nickyalbuquerque2008@gmail.com',
      function: 'Desenvolvedora Frontend',
    },
  });

  const leornado = await prisma.user.upsert({
    where: { email: 'leohas.dev@gmail.com' },
    update: {},
    create: {
      name: 'Leornado Henrique',
      email: 'leohas.dev@gmail.com',
      function: 'Full Stack Developer',
    },
  });

  const pedroMiguel = await prisma.user.upsert({
    where: { email: 'pedromiguelmvs.dev@gmail.com' },
    update: {},
    create: {
      name: 'Pedro Miguel',
      email: 'pedromiguelmvs.dev@gmail.com',
      function: 'Desenvolvedor Sênior e Engenheiro de Software',
    },
  });

  const lucasAlves = await prisma.user.upsert({
    where: { email: 'lcsjalves@gmail.com' },
    update: {},
    create: {
      name: 'Lucas Alves',
      email: 'lcsjalves@gmail.com',
      function: 'Desenvolvedor Mobile na Randstad Brasil',
    },
  });

  const teste = await prisma.user.upsert({
    where: { email: 'teste@teste.com' },
    update: {},
    create: {
      name: 'Testando Seed',
      email: 'teste@teste.com',
      function: 'Dev Teste Master',
    },
  });

  console.log({
    mikkaiser,
    leticia,
    monique,
    leornado,
    pedroMiguel,
    lucasAlves,
    teste,
  });
}
