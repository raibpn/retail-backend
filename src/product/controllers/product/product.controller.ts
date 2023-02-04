import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

@Controller('product')
export class ProductController {
  @Get()
  getProduct() {
    return { name: 'pant', price: '200dkk' };
  }
}
