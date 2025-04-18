import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiModule } from './Apis/openai/openai.module';
import { UserModule } from './database/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { MetadataExerciseModule } from './database/metadataExercise/metadataExercise.module';
// import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [OpenaiModule,UserModule,PrismaModule,MetadataExerciseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
