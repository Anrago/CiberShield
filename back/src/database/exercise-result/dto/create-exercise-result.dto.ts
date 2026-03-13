import { OmitType } from "@nestjs/swagger";
import { ExerciseResult } from "../entities/exercise-result.entity";

export class CreateExerciseResultDto extends OmitType(ExerciseResult,[
    'id',
    'createdAt',
    ]){}
