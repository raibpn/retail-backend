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

  // insertProduct(title: string, desc: string, price: number, createdAt: Date) {
  //   const prodId = Math.random().toString();
  //   const newProduct = new this.productModel(prodId, title);
  //   this.products.push(newProduct);
  //   return prodId;
  // }
  createProduct(product: Product) {
    return this.createProduct();
    // return 'create product';
  }
  getAllProducts() {
    return 'All Products';
  }

  getProductById(id: String) {
    return 'Product with string';
  }
}
