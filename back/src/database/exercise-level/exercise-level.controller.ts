import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseLevelService } from './exercise-level.service';
import { CreateExerciseLevelDto } from './dto/create-exercise-level.dto';
import { UpdateExerciseLevelDto } from './dto/update-exercise-level.dto';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('exercise-level')
export class ExerciseLevelController {
  constructor(private readonly exerciseLevelService: ExerciseLevelService) {}


  @Post()
  @ApiBody({description: 'Create exercise level', type: CreateExerciseLevelDto})
  create(@Body() createExerciseLevelDto: CreateExerciseLevelDto) {
    return this.exerciseLevelService.create(createExerciseLevelDto);
  }

  @Get()
  @ApiBody({description: 'Get all exercise levels', type: CreateExerciseLevelDto})
  findAll() {
    return this.exerciseLevelService.findAll();
  }

  @Get(':name')
  @ApiBody({description: 'Get exercise level by name', type: CreateExerciseLevelDto})
  @ApiParam({name: 'id', description: 'exercise level name'})
  findOne(@Param('name') name: string) {
    return this.exerciseLevelService.findOne(name);
  }


}
