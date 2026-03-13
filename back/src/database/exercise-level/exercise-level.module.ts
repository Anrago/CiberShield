import { Module } from '@nestjs/common';
import { ExerciseLevelService } from './exercise-level.service';
import { ExerciseLevelController } from './exercise-level.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExerciseLevelController],
  providers: [ExerciseLevelService],
})
export class ExerciseLevelModule {}
