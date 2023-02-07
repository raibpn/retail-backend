import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/types/product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async getAllProducts() {
    return await this.productModel.find();
  }

  async getProductById(id: String) {
    return await this.productModel.findById(id);
  }

  async createProduct(productDto: Product): Promise<Product> {
    const product = await this.productModel.create(productDto);
    await product.save();
    return product;
  }

  async update(id: string, productDto: Product): Promise<Product> {
    const product = await this.productModel.findById(id);
    await product.update(productDto);
    return product;
  }
}
