import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiModule } from './Apis/openai/openai.module';
// import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [OpenaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
