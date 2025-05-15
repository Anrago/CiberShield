import { Injectable } from '@nestjs/common';
import { CreateExerciseResultDto } from './dto/create-exercise-result.dto';
import { UpdateExerciseResultDto } from './dto/update-exercise-result.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExerciseResultService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExerciseResultDto: CreateExerciseResultDto) {
    console.log(createExerciseResultDto)
    return await this.prisma.exerciseResult.create({
      data: createExerciseResultDto,
    });
  }

  async findAll() {
    return await this.prisma.exerciseResult.findMany({
      include: {
        exercise: true,
        user: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.exerciseResult.findUnique({
      where: {
        id: id,
        },
      include: {
        exercise: true,
        user: true,
      },
      });
  }

  // update(id: number, updateExerciseResultDto: UpdateExerciseResultDto) {
  //   return `This action updates a #${id} exerciseResult`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} exerciseResult`;
  // }
}
