import { Controller, Get } from '@nestjs/common';
import { PostsModule } from './modules/posts/posts.module';
import { PostsService } from './modules/posts/posts.service';

@Controller()
export class AppController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private readonly postService: PostsService) {}

  @Get()
  getPosts(): Promise<PostsModule[]> {
    return this.postService.posts({ where: { isPublished: true } });
  }
}
