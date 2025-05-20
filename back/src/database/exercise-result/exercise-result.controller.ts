import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExerciseResultService } from './exercise-result.service';
import { CreateExerciseResultDto } from './dto/create-exercise-result.dto';
import { UpdateExerciseResultDto } from './dto/update-exercise-result.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('exercise-result')
export class ExerciseResultController {
  constructor(private readonly exerciseResult: ExerciseResultService) {}

  @Post()
  create(@Body() createExerciseResultDto: CreateExerciseResultDto) {
    return this.exerciseResult.create(createExerciseResultDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.exerciseResult.findAll(id);
  }


}
