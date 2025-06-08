import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  // @UseGuards(JwtAuthGuard)
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

  // @UseGuards(JwtAuthGuard)
  // @Post('create')
  // async createPost(
  //   @Body() postData: CreatePostDto,
  // ): Promise<PostModel> {
  //   return this.postService.createPost(postData);
  // }
}
