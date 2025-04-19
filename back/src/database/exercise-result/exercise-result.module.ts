import { Module } from '@nestjs/common';
import { ExerciseResultService } from './exercise-result.service';
import { ExerciseResultController } from './exercise-result.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExerciseResultController],
  providers: [ExerciseResultService],
})
export class ExerciseResultModule {}
