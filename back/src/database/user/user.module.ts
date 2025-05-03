import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
      dest: './uploads',
      
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 👈 Esto es CLAVE
})
export class UserModule {}
