import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/database/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import * as bcrypt from 'bcrypt';

@Injectable()
export class authService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const userExist = await this.userService.findOne(username);
    if (!userExist) {
      throw new UnauthorizedException('Invalid username');
    }

    const isPasswordValid = await bcrypt.compare(pass, userExist.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      user: userExist.id,
      username: userExist.userName,
      email: userExist.email,
      imgPerfil: userExist.imgPerfil,
      name: userExist.name,
      lastName: userExist.lastName,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
