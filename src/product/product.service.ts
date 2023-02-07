import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/types/product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  createProduct(product: Product) {
    return this.createProduct(product);
    // return 'create product';
  }
  getAllProducts() {
    return 'All Products';
  }

  getProductById(id: String) {
    return `Product with string ${id}`;
  }
}
