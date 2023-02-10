import { Injectable, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductEntity } from './entities/product.entity';
@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(CreateProductDto: CreateProductDto) {
    // console.log('product:', product);

    return this.prisma.product.create({ data: CreateProductDto });
  }

  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './files',
  //       filename: (req, file, callback) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(file.originalname);
  //         const filename = `${uniqueSuffix}${ext}`;
  //         callback(null, filename);
  //       },
  //     }),
  //   }),
  // )
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  //   return 'file upload API';
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
