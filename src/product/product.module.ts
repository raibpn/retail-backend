import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/models/product.schema';
import { ProductService } from './product.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    PrismaModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
