import { OmitType } from "@nestjs/swagger";
import { ExerciseLevel } from "../entities/exercise-level.entity";
export class CreateExerciseLevelDto extends OmitType(ExerciseLevel,[
    'id',
]){}
