import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseTypeService } from './exercise-type.service';
import { CreateExerciseTypeDto } from './dto/create-exercise-type.dto';
import { UpdateExerciseTypeDto } from './dto/update-exercise-type.dto';
import { ApiProperty } from '@nestjs/swagger';

@Controller('exercise-type')
export class ExerciseTypeController {
  constructor(private readonly exerciseTypeService: ExerciseTypeService) {}

  
  @Post()
  @ApiProperty({description: 'Create exercise type', type: CreateExerciseTypeDto})
  
  create(@Body() createExerciseTypeDto: CreateExerciseTypeDto) {
    return this.exerciseTypeService.create(createExerciseTypeDto);
  }

  @Get()
  @ApiProperty({description: 'Get all exercise types', type: CreateExerciseTypeDto})
  findAll() {
    return this.exerciseTypeService.findAll();
  }

  @Get(':name')
  @ApiProperty({description: 'Get exercise type by name', type: CreateExerciseTypeDto})
  findOne(@Param('name') name: string) {
    return this.exerciseTypeService.findOne(name);
  }


}
