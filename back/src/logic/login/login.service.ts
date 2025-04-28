import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/database/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class LoginService {
  constructor (private readonly userService: UserService, private jwtService: JwtService) {}


  async signIn(username: string , pass:string ):  Promise<any> {
    const userExist = await this.userService.findOne(username);
    if (!userExist) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (userExist?.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {user: userExist.id, username: userExist.userName, email: userExist.email};
    


    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
