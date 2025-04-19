import { OmitType } from "@nestjs/swagger";
import { ExerciseLevel } from "src/database/exercise-level/entities/exercise-level.entity";
export class CreateExerciseTypeDto extends OmitType(ExerciseLevel,[
    'id',
]){}
