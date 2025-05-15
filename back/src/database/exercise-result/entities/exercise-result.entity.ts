import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsIn,
  IsInt,
  IsPositive,
  IsString,
} from 'class-validator';

export class ExerciseResult {
  @IsInt({ message: 'id must be a number' })
  @IsPositive({ message: 'id must be a positive number' })
  id: number;

  @IsInt({ message: 'exerciseId must be a number' })
  @IsPositive({ message: 'exerciseId must be a positive number' })
  exerciseId: number;

  @IsInt({ message: 'userId must be a number' })
  @IsPositive({ message: 'userId must be a positive number' })
  userId: number;

  @IsBoolean({ message: 'correct must be a boolean' })
  correct: boolean;

  @IsString({ message: 'feedback must be a string' })
  @ApiProperty({
    description: 'feedback must be a string',
    example: 'This is a feedback to exercise.',
  })
  feedback: string | undefined;

  @IsInt({ message: 'score must be a number' })
  @IsPositive({ message: 'score must be a positive number' })
  @ApiProperty({ description: 'score must be a number', example: 10 })
  exerciseTypeId: number;

  @IsInt({ message: 'score must be a number' })
  @IsPositive({ message: 'score must be a positive number' })
  @ApiProperty({ description: 'score must be a number', example: 10 })
  exerciseLevelId: number;

  @IsDate({ message: 'createdAt must be a date' })
  @ApiProperty({
    description: 'createdAt must be a date',
    example: '2023-10-01T00:00:00.000Z',
  })
  createdAt: Date;
}
