import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
  NotFoundException,
  UploadedFile,
  UseInterceptors,
  UploadedFiles,
  HttpStatus,
} from '@nestjs/common';
// import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { ApiBody, ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import {
  AnyFilesInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import { BadRequestException } from '@nestjs/common/exceptions';
import { HttpCode, Request, Res } from '@nestjs/common/decorators';
import { Response } from 'express';
import { uuid } from 'uuidv4';
import { saveImageToStorage } from 'src/multer/image-storage';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  // @ApiCreatedResponse({ type: ProductEntity })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        price: {
          type: 'string',
        },
        slug: {
          type: 'string',
        },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  //delete saveImageToStorage and uncomment memory storage in app.module.ts
  //to upload file in memory storage instead on disk
  @UseInterceptors(FileInterceptor('file'))
  // @HttpCode(HttpStatus.CREATED)
  create(
    @Body() CreateProductDto: CreateProductDto,
    @UploadedFile('file') file: Express.Multer.File,
  ) {
    // console.log('product in controller:', CreateProductDto);
    // console.log('image in controller:', file);
    console.log({ CreateProductDto, file });
    return this.productsService.create(CreateProductDto, file);
  }

  @Get()
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);

    if (!product) {
      throw new NotFoundException(`Product with ${id} does not exist.`);
    }

    return product;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(+id);
  }
}
