import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/types/product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  // constructor(@InjectModel('Product') private productModel: Model<Product>) {}
  constructor(@InjectModel('Product') private prisma: PrismaService) {}

  async getAllProducts() {
    // const product = await this.productModel.find().exec();
    // if (!product || product.length == 0) {
    //   throw new NotFoundException('Products Not Found');
    // }
    // return product;
    // const product = await this.prisma.find().exec();
    // if (!product || product.length == 0) {
    //   throw new NotFoundException('Products Not Found');
    // }
    // return product;
  }

  async getProductById(id: String) {
    // return await this.productModel.findById(id);
    //TO USE
    // return await this.prisma.findById(id);
  }

  // async createProduct(productDto: Prisma.PostCreateInput): Promise<Product> {
  // const product = await this.productModel.create(productDto);
  // await product.save();
  // return product;

  //TO USE
  //   const product = await this.prisma.create(productDto);
  //   await product.save();
  //   return product;
  // }

  // async updateProduct(id: string, productDto: Product): Promise<Product> {
  // const existingProduct = await this.productModel.findByIdAndUpdate(
  //   id,
  //   productDto,
  //   { new: true },
  // );
  // if (!existingProduct) {
  //   throw new NotFoundException(`Student #${id} not found`);
  // }
  // return existingProduct;

  //TO USE

  // const existingProduct = await this.prisma.findByIdAndUpdate(
  //   id,
  //   productDto,
  //   { new: true },
  // );
  // if (!existingProduct) {
  //   throw new NotFoundException(`Student #${id} not found`);
  // }
  // return existingProduct;
  // }

  // async deleteProduct(id: string): Promise<Product> {
  // const product = await this.productModel.findById(id);
  // await product.remove();
  // return product;

  //TO USE
  // const product = await this.prisma.findById(id);
  // await product.remove();
  // return product;
  // }
}
