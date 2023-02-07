import { Controller, HttpStatus } from '@nestjs/common';
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
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() product: Product,
  ): Promise<Product> {
    try {
      const existingProduct = await this.productService.updateProduct(
        id,
        product,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Product has been successfully updated',
        existingProduct,
      });
    } catch (err) {
      return res.status(err.status).json(err.response);
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
