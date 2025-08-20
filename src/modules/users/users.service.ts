import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async findAll() {
    return this.prisma.user.findMany({
      where: { deletedAt: null, role: 'creator' },
      select: {
        id: true,
        name: true,
        username: true,
        function: true,
        role: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(username: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
      select: {
        name: true,
        function: true,
        description: true,
        posts: {
          where: { isPublished: true },
          select: { title: true, slug: true },
        },
      },
    });

    if (!user) {
      throw new NotFoundException(
        `Usuário com o nome de ${username} não encontrado.`,
      );
    }

    return user;
  }

  async findUserByName(name: string) {
    const user = this.prisma.user.findFirst({ where: { name } });

    if (!user) {
      throw new NotFoundException(`Usuário com o nome ${name} não encontrado.`);
    }

    return user;
  }

  async update(username: string, data: UpdateUserDto) {
    const findUser = await this.findOne(username);

    if (!findUser) {
      throw new NotFoundException(
        `Usuário com o nome de "${username}" não encontrado.`,
      );
    }

    return this.prisma.user.update({ where: { username }, data });
  }

  async remove(username: string) {
    const findUser = await this.findOne(username);

    if (!findUser) {
      throw new NotFoundException(
        `Usuário com o nome de "${username}" não encontrado.`,
      );
    }

    await this.prisma.user.delete({ where: { username } });

    return { message: 'Usuário removido com sucesso!', username };
  }
}
