import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiModule } from './Apis/openai/openai.module';
import { UserModule } from './database/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { MetadataExerciseModule } from './database/metadataExercise/metadataExercise.module';
import { ExerciseLevelModule } from './database/exercise-level/exercise-level.module';
import { ExerciseModule } from './database/exercise/exercise.module';
import { ExerciseTypeModule } from './database/exercise-type/exercise-type.module';
import { ExerciseResultModule } from './database/exercise-result/exercise-result.module';
import { LoginModule } from './logic/auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { memoryStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import { SupabaseService } from './supabase/subapase_client.service';
// import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    OpenaiModule,
    UserModule,
    PrismaModule,
    MetadataExerciseModule,
    ExerciseLevelModule,
    ExerciseTypeModule,
    ExerciseModule,
    ExerciseResultModule,
    LoginModule,
    MulterModule.register({
      storage: memoryStorage(),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
