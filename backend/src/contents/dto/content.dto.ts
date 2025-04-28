import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(['text', 'image', 'video'])
  type: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
