import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/types/product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductSchema } from 'src/models/product.schema';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  insertProduct(title: string, desc: string, price: number, createdAt: Date) {
    const prodId = Math.random().toString();
    const newProduct = new this.productModel(
      prodId,
      title,
      desc,
      price,
      createdAt,
    );
    this.products.push(newProduct);
    return prodId;
  }
}
