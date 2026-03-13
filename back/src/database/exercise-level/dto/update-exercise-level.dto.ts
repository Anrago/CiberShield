import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseLevelDto } from './create-exercise-level.dto';

export class UpdateExerciseLevelDto extends PartialType(CreateExerciseLevelDto) {}
