import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
    // folder: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    console.log('image in cloudinary service', file);
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload(
        file.filename,
        { folder: 'products' },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      toStream(file.buffer).pipe(upload);
    });
  }
}
