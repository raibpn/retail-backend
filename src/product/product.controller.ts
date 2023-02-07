import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post, Req, Res } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { ProductService } from './product.service';
// import { CreateProductDto } from 'src/product/dtos/product.schema';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAllProduct() {
    return this.productService.getAllProducts;
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct() {
    return this.productService.createProduct();
  }
}
