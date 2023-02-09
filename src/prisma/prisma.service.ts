import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { env } from 'process';

// @Injectable()
// export class PrismaService extends PrismaClient {
//   constructor() {
//     super({
//       datasources: {
//         db: {
//           url: `${process.env.PROD_MONGO_URL}`,
//         },
//       },
//     });
//   }

//   cleanDb() {
//     return this.$transaction([this.user.deleteMany()]);
//   }
// }

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
