import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { memoryStorage } from 'multer';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    UserModule,
    ProductsModule,
    MulterModule.register({
      dest: './uploads',
    }),
    // MulterModule.register({
    //   storage: memoryStorage(),
    // }),
    CloudinaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
