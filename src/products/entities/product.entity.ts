import { Product } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class ProductEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  slug: String;

  @ApiProperty()
  image: String;
}
