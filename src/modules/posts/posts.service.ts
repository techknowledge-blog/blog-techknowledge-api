import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Post } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  private calculateEstimatedTime(content: string): number {
    if (!content) {
      new NotFoundException('Conteúdo não encontrado!');
      return 0;
    }

    const countWords = content.trim().split(/\s+/).length;

    return Math.ceil(countWords / 200);
  }

  async createPost(data: CreatePostDto): Promise<Post> {
    const estimated_time = this.calculateEstimatedTime(data.content as string);

    return this.prisma.post.create({
      data: {
        title: data.title,
        previewContent: data.previewContent,
        content: data.content,
        slug: data.slug,
        isPublished: data.isPublished,
        coverImageLink: data.coverImageLink,
        previewImageLink: data.previewImageLink,
        estimated_time,
        author: { connect: { id: data.authorId } },
        category: { connect: { id: data.categoryId } },
      },
    });
  }

  async findPostBySlug(slug: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({
      where: { slug },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!post) {
      throw new NotFoundException('Artigo não encontrado!');
    }

    return post;
  }

  async findPublishedPosts(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany({
      where: {
        isPublished: true,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!posts) {
      throw new NotFoundException('Artigos não encontrados!');
    }

    return posts;
  }

  async updatePost(slug: string, data: UpdatePostDto) {
    const findPost = await this.findPostBySlug(slug);

    if (!findPost) {
      throw new NotFoundException(
        `Não foi encontrado o artigo com o slug "${slug}"`,
      );
    }

    return this.prisma.post.update({ where: { slug }, data });
  }

  async removePost(slug: string) {
    const findPost = await this.findPostBySlug(slug);

    if (!findPost) {
      throw new NotFoundException(
        `Não foi encontrado o artigo com o slug "${slug}"`,
      );
    }

    await this.prisma.post.delete({ where: { slug } });

    return { message: 'Artigo removido com sucesso!' };
  }
}
