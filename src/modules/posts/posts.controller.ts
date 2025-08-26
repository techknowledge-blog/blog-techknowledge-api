import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  async create(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }

  @Get('published')
  async findPublishedPosts(): Promise<PostModel[]> {
    return this.postService.findPublishedPosts();
  }

  @Get(':slug')
  async findPostBySlug(@Param('slug') slug: string): Promise<PostModel> {
    return this.postService.findPostBySlug(slug);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() dto: UpdatePostDto) {
    return this.postService.updatePost(slug, dto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.postService.removePost(slug);
  }
}
