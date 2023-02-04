import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';

@Module({
  controllers: [ProductController]
})
export class ProductModule {}
