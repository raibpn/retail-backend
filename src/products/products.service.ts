import { BadRequestException, Injectable } from '@nestjs/common';

import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductEntity } from './entities/product.entity';
@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
  ) {}

  async create(CreateProductDto: CreateProductDto, image: Express.Multer.File) {
    // console.log('product:', product);
    // return await this.cloudinary.uploadImage(file).catch(() => {
    //   throw new BadRequestException('Invalid file type.');
    // });
    // return this.prisma.product.create({ data: CreateProductDto });
    try {
      const result = await this.cloudinary.uploadImage(image);
      // console.log('sent img to cloudinary:', result.secure_url);
      // console.log('result upload image', result);
      const product = await this.prisma.product.create({
        data: {
          title: CreateProductDto.title,
          description: CreateProductDto.description,
          slug: CreateProductDto.slug,
          price: +CreateProductDto.price,
          image: result.url,
          height: result.height,
          width: result.width,
        },
      });
      console.log('product:', product);
      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
