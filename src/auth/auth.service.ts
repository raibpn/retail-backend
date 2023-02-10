import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Product, User } from '@prisma/client';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService, // private jwt: JwtService, // private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    // save the new user in the db

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          firstName: dto.firstName,
          lastName: dto.lastName,
          hash,
        },
      });

      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Account Taken');
        } else {
          throw new BadRequestException('Account already taken!');
        }
      }
      throw error;
    }
  }

  //SIGNIN
  async signin(dto: AuthDto) {
    //FIND THE USER BY EMAIL
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //HANDLE NOT FOUND
    if (!user) throw new ForbiddenException('Credentials Incorrect');
    //COMPARE PASSWORD
    const pwMathces = await argon.verify(user.hash, dto.password);
    if (!pwMathces) throw new ForbiddenException('Credential incorrect');

    delete user.hash;
    return user;
  }

  // async signToken(
  //   userId: string,
  //   email: string,
  // ): Promise<{ access_token: string }> {
  //   const payload = {
  //     sub: userId,
  //     email,
  //   };
  //   const secret = this.config.get('JWT_SECRET');

  //   const token = await this.jwt.signAsync(payload, {
  //     expiresIn: '15m',
  //     secret: secret,
  //   });

  //   return {
  //     access_token: token,
  //   };
  // }
}
