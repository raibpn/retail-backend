import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ConfigModule.forRoot(), ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
