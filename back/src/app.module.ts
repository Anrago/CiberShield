import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiModule } from './Apis/openai/openai.module';
import { UserModule } from './database/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { MetadataExerciseModule } from './database/metadataExercise/metadataExercise.module';
import { UserSettingsModule } from './database/user-settings/user-settings.module';
import { ExerciseLevelModule } from './database/exercise-level/exercise-level.module';
import { ExerciseModule } from './database/exercise/exercise.module';
import { ExerciseTypeModule } from './database/exercise-type/exercise-type.module';
// import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [OpenaiModule,UserModule,PrismaModule,MetadataExerciseModule,UserSettingsModule,ExerciseLevelModule,
    ExerciseTypeModule,ExerciseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
