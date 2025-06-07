import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostsController } from './auth.controller';
import { PostsService } from './auth.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class PostsModule {}
