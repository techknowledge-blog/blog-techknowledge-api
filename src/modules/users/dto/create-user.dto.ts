import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  username: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  avatarLink?: string;

  @IsOptional()
  @IsString()
  passwordHash?: string;

  @IsString()
  @IsNotEmpty()
  function: string;

  @IsOptional()
  @IsString()
  role?: string;
}
