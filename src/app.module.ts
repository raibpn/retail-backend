import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // ProductModule,
    // MongooseModule.forRoot(`${process.env.PROD_MONGO_URL}`),
    AuthModule,
    PrismaModule,
    UserModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
