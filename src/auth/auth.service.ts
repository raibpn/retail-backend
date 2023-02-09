import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    //generate password hash
    const hash = await argon.hash(dto.password);

    //save new user in db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,

        hash,
      },
    });

    //return saved user
    return user;
  }

  signin(dto: AuthDto) {
    return {
      msg: 'signin from service',
    };
  }
}
