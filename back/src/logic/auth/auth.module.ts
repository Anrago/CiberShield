import { Module } from '@nestjs/common';
import { authService } from './auth.service';
import { LoginController } from './auth.controller';
import { UserModule } from 'src/database/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constant';

@Module({
  imports: [UserModule, JwtModule.register({
    global:true,
    secret:jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  })],
  controllers: [LoginController],
  providers: [authService],
})
export class LoginModule {}
