import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExerciseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExerciseDto: CreateExerciseDto) {
    return await this.prisma.exercise.create({
      data: createExerciseDto,
    });
  }

  async findAll(difficulty: string, type: string) {
  if (difficulty && type) {
    const allExercises = await this.prisma.exercise.findMany({
      where: {
        levelId: parseInt(difficulty),
        typeId: parseInt(type),
      },
      select: {
        content: true,
      },
    });

    const onlyContents = allExercises
      .map((e) => e.content)
      .filter(
        (c) =>
          c &&
          typeof c === 'object' &&
          'Asunto' in c &&
          'Cuerpo' in c &&
          'Remitente' in c
      );

    if (onlyContents.length > 0) {
      const count = Math.min(
        onlyContents.length,
        Math.floor(Math.random() * 3) + 3 
      );
      const shuffled = onlyContents.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }

    return [];
  }

  return [];
}

  async findOne(id: number) {
    return await this.prisma.exercise.findUnique({
      where: {
        id: id,
      },
    });
  }
}
