import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  description: string;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  slug: string;

  // @IsOptional()
  // @IsNotEmpty()
  // @ApiProperty({ required: true })
  // image: any;

  @ApiProperty({ type: 'string', format: 'binary', required: true })
  image: string;
}
