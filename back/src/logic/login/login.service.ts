import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationError } from 'openai';
import { UserService } from 'src/database/user/user.service';

@Injectable()
export class LoginService {
  constructor (private readonly userService: UserService) {}


  async signIn(username: string , pass:string ): Promise<any> {
    const user = await this.userService.findOne(username);
    if (!user) {
      return null;
    }

    if (user?.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // const { password, ...result } = user;

    // const result;
  }
}
