import { v2 } from 'cloudinary';
import process, { env } from 'process';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: env.CLOUD_NAME,
      api_key: env.API_KEY,
      api_secret: env.API_SECRET,
    });
  },
};
