import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid'; // Importar uuid para generar nombres únicos
import { SupabaseModule } from 'src/supabase/subapase_client.module';
import { memoryStorage } from 'multer';
@Module({
  imports: [
    PrismaModule,
    SupabaseModule,
    MulterModule.register({
      storage: memoryStorage(),
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 👈 Esto es CLAVE
})
export class UserModule {}
