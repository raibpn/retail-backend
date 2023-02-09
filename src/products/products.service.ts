import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductEntity } from './entities/product.entity';
@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(CreateProductDto: CreateProductDto) {
    // console.log('product:', product);
    return this.prisma.product.create({ data: CreateProductDto });
  }

  async findAll(): Promise<ProductEntity[]> {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
