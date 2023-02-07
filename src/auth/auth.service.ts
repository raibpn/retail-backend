import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return {
      msg: 'signin from service',
    };
  }

  signup() {
    return {
      msg: 'signup from service',
    };
  }
}
