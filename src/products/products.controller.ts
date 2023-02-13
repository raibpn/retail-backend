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
          type: 'number',
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
    console.log('product in controller:', CreateProductDto);
    console.log('image in controller:', file);
    return this.productsService.create(CreateProductDto, file);
  }

  // @Post('file')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploads',
  //       filename: (req, file, callback) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(file.originalname);
  //         const filename = `${file.originalname}-${uniqueSuffix}${ext}`;

  //         callback(null, filename);
  //       },
  //     }),
  //     fileFilter: (req, file, cb) => {
  //       if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
  //         return cb(null, false);
  //       }
  //       cb(null, true);
  //     },
  //   }),
  // )

  // handleUpload(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  //   if (!file) {
  //     throw new BadRequestException('Invalid Image');
  //   } else {
  //     const response = {
  //       filepath: `http://localhost:8000/products/pictures/${file.filename}`,
  //     };

  //     return response;
  //   }
  // }

  //ORIGINAL;
  // @Get('pictures/:filename')
  // async getPictures(@Param('filename') filename, @Res() res: Response) {
  //   console.log('filename:', filename);
  //   res.sendFile(filename, { root: './uploads' });
  // }

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
