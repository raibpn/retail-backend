import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  image: string;
}
