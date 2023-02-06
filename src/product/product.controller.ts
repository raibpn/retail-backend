import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post, Req, Res } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { ProductService } from './product.service';
// import { CreateProductDto } from 'src/product/dtos/product.schema';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProduct() {
    return { name: 'pant', price: '200dkk' };
  }

  // @Post()
  // createProduct(@Body() productData: CreateProductDto) {
  //   console.log(productData);
  //   return {};
  // }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    console.log(id);
    return id;
  }
}
