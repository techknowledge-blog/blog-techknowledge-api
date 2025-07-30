import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './modules/posts/posts.service';
import { PrismaService } from './prisma.service';
import { PostsModule } from './modules/posts/posts.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';

@Module({
  imports: [PostsModule, AuthModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, PrismaService, PostsService, UsersService],
  exports: [PrismaService],
})
export class AppModule {}
