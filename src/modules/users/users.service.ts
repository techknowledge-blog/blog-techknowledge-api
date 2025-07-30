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
      where: { deletedAt: null },
      select: {
        name: true,
        function: true,
      },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        name: true,
        function: true,
        posts: { where: { isPublished: true }, select: { title: true } },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: number, data: UpdateUserDto) {
    const findUser = await this.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number) {
    const findUser = await this.findOne(id);

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    await this.prisma.user.delete({ where: { id } });

    return { message: 'User successfully removed', id };
  }
}
