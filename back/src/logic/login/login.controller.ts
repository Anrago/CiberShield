import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { LoginService } from './login.service';


@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @HttpCode(200)
  @Post()
  signIn(@Body('username') username: string, @Body('password') password: string) {
    return this.loginService.signIn(username, password);
  }
}
