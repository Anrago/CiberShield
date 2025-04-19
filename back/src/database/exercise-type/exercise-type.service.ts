import { Injectable } from '@nestjs/common';
import { CreateExerciseTypeDto } from './dto/create-exercise-type.dto';
import { UpdateExerciseTypeDto } from './dto/update-exercise-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExerciseTypeService {

  constructor(private readonly prisma: PrismaService){}

  async create(createExerciseTypeDto: CreateExerciseTypeDto) {
    return await this.prisma.exerciseType.create({
      data:createExerciseTypeDto
    }) 
  }

  async findAll() {
    return await this.prisma.exerciseType.findMany()
  }

  async findOne(name: string) {
    return await this.prisma.exerciseType.findUnique({
      where:{
        name:name
      }
    })
  }

}
