import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: 'daev3vt5w',
      api_key: '489687321435178',
      api_secret: '4voUa1X6RGDhc29-pc8Py-QsJl8',
    });
  },
};
