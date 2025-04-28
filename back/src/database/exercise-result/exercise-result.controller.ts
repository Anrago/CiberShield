import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.exerciseResult.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.exerciseResult.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateExerciseResultDto: UpdateExerciseResultDto) {
  //   return this.exerciseResultService.update(+id, updateExerciseResultDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.exerciseResultService.remove(+id);
  // }
}
