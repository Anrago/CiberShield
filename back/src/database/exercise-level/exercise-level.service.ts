import { Injectable } from '@nestjs/common';
import { CreateExerciseLevelDto } from './dto/create-exercise-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExerciseLevelService {
  constructor(private readonly prisma:PrismaService){}

  async create(createExerciseLevelDto: CreateExerciseLevelDto) {
    return await this.prisma.exerciseLevel.create({
      data: createExerciseLevelDto,
    })
  }

  async findAll() {
    return await this.prisma.exerciseLevel.findMany();
  }

  async findOne(name: string) {
    return await this.prisma.exerciseLevel.findUnique(
      {
        where: {
          name: name,
        },
      }
    )
  }

}
