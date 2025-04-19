import { OmitType } from "@nestjs/swagger";
import { Exercise } from "../entities/exercise.entity";

export class CreateExerciseDto extends OmitType(Exercise,[
    'id',
    'createAt',
    'exerciseResultId',
]){}
