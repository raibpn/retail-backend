import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post, Req, Res } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { CreateProductDto } from 'src/product/dtos/CreateProduct.dto';

@Controller('product')
export class ProductController {
  @Get()
  getProduct() {
    return { name: 'pant', price: '200dkk' };
  }

  @Post()
  createProduct(@Body() productData: CreateProductDto) {
    console.log(productData);
    return {};
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    console.log(id);
    return id;
  }
}
