import { Module } from '@nestjs/common';
import { ExerciseTypeService } from './exercise-type.service';
import { ExerciseTypeController } from './exercise-type.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExerciseTypeController],
  providers: [ExerciseTypeService],
})
export class ExerciseTypeModule {}
