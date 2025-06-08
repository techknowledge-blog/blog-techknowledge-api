import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './modules/posts/posts.service';
import { PrismaService } from './prisma.service';
import { PostsModule } from './modules/posts/posts.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    //   definitions: {
    //     path: join(process.cwd(), 'src/graphql.ts'),
    //   },
    // }),
    PostsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, PostsService],
  exports: [PrismaService],
})
export class AppModule {}
