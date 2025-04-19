import { PartialType } from '@nestjs/swagger';
import { CreateExerciseResultDto } from './create-exercise-result.dto';

export class UpdateExerciseResultDto extends PartialType(CreateExerciseResultDto) {}
