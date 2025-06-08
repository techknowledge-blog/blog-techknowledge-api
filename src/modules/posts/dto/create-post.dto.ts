import { IsInt, IsOptional, IsString, IsBoolean, IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  previewContent: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsUrl()
  coverImageLink?: string;

  @IsOptional()
  @IsUrl()
  previewImageLink?: string;

  @IsString()
  slug: string;

  @IsInt()
  authorId: number;

  @IsInt()
  categoryId: number;
}
