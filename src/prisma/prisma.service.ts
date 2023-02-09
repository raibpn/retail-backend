import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          //   url: `${process.env.PROD_MONGO_URL}`,
          url: config.get('PROD_MONGO_URL'),
        },
      },
    });
  }

  cleanDb() {
    return this.$transaction([this.user.deleteMany()]);
  }
}
