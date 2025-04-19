import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExerciseService {
  
  constructor(private readonly prisma: PrismaService){}

  async create(createExerciseDto: CreateExerciseDto) {
    return await this.prisma.exercise.create({
      data: createExerciseDto,
    });
  }

  async findAll() {
    return await this.prisma.exercise.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.exercise.findUnique({
      where: {
        id: id,
        },
    });
  }

  // async update(id: number, updateExerciseDto: UpdateExerciseDto) {
  //   return await `This action updates a #${id} exercise`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} exercise`;
  // }
}
