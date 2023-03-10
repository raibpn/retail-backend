import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, signInDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
    console.log('user:', dto);
  }

  // signup(@Body('email') email: string, @Body('password') password: string) {
  //   return this.authService.signup();
  // }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: signInDto) {
    return this.authService.signin(dto);
  }
}
