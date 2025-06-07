import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './auth.service';
import { Post as PostModel } from '@prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('published')
  async findPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: { isPublished: true },
    });
  }

  @Get('filtered-posts/:searchString')
  async findFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Get(':slug')
  async findPostBySlug(@Param('slug') slug: string): Promise<PostModel> {
    return this.postService.findPostBySlug(slug);
  }
}
