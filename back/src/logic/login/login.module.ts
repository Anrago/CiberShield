import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UserModule } from 'src/database/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';

@Module({
  imports: [UserModule, JwtModule.register({
    global:true,
    secret:jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  })],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
