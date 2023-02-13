import {
  BadRequestException,
  Injectable,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { of } from 'rxjs';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductEntity } from './entities/product.entity';
@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
  ) {}

  async create(CreateProductDto: CreateProductDto, image: Express.Multer.File) {
    // console.log('product:', product);
    // return await this.cloudinary.uploadImage(file).catch(() => {
    //   throw new BadRequestException('Invalid file type.');
    // });
    // return this.prisma.product.create({ data: CreateProductDto });
    try {
      const result = await this.cloudinary.uploadImage(image);
      console.log('sent img to cloudinary:', result.secure_url);
      console.log('result upload image', result);
      const product = await this.prisma.product.create({
        data: {
          title: CreateProductDto.title,
          description: CreateProductDto.description,
          slug: CreateProductDto.slug,
          price: CreateProductDto.price,
          image: result.secure_url,
        },
      });
      console.log('product:', product);
      return product;
    } catch (error) {}
  }

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

  // handleUpload(@UploadedFile() file: Express.Multer.File, @Request() req): any {
  //   const fileName = file?.filename;
  //   if (!fileName) return of({ error: 'File must be a png, jpeg/jpg' });
  //   const imagesFolderPath = join(process.cwd(), 'uploads');
  //   const fullImagePath = join(imagesFolderPath + '/' + file.filename);

  //   return of({ error: 'File content does not match extension!' });
  // }

  async findAll(): Promise<ProductEntity[]> {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
