import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './modules/posts/posts.service';
import { PrismaService } from './prisma.service';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';

@Module({
  imports: [PostsModule, AuthModule, UsersModule],
  controllers: [AppController, UsersController, AuthController],
  providers: [
    AppService,
    PrismaService,
    PostsService,
    UsersService,
    AuthService,
  ],
  exports: [PrismaService],
})
export class AppModule {}
