import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common/decorators';
import { ProductService } from './product.service';
import { Product } from 'src/types/product';

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
  createProduct(@Param('product') product: Product) {
    return this.productService.createProduct(product);
  }

  @Put()
  update() {}

  @Delete()
  delete() {}
}
