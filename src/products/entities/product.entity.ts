import { Product } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';
export class ProductEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  @MinLength(2)
  price: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  slug: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;
}
