import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

const fs = require('fs');
// const fileType = require('file-type');

import path = require('path');
import { extname } from 'path';
import { from, Observable } from 'rxjs';

type validFileExtension = 'png' | 'jpg' | 'jpeg';
type validMimeType = 'image/png' | 'image/jpg' | 'image/jpeg';

const validFileExtensions: validFileExtension[] = ['png', 'jpeg', 'jpg'];
const validMimeTypes: validMimeType[] = [
  'image/png',
  'image/jpeg',
  'image/jpg',
];

export const saveImageToStorage = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const fileExtension: string = path.extname(file.originalname);
      const fileName: string = uuidv4() + fileExtension;

      cb(null, fileName);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes: validMimeType[] = validMimeTypes;
    allowedMimeTypes.includes(file.mimeType) ? cb(null, true) : cb(null, false);
  },
};

// export const isFileExtensionSafe = (
//   fullFilePath: string,
// ): Observable<boolean> => {
//   return from(fileType.fromFile(fullFilePath));
// };
