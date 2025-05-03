import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid'; // Importar uuid para generar nombres únicos
@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {

      const extname = path.extname(file.originalname);
      const filename = `${uuidv4()}${extname}`;  // Conservar la extensión original
      cb(null, filename);
    },
  }),
}),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 👈 Esto es CLAVE
})
export class UserModule {}
