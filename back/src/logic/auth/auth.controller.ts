import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards, Request } from '@nestjs/common';
import { authService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: authService) {}

  @HttpCode(200)
  @Post('login')
  signIn(@Body('username') username: string, @Body('password') password: string) {
    return this.loginService.signIn(username, password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
