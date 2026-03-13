import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString } from "class-validator";

export class ExerciseLevel {
    @IsInt({message: 'id must be a number'})
    @IsPositive({message: 'id must be a positive number'})
    id:number;

    @IsString({message: 'name must be a string'})
    @ApiProperty({description: 'name must be a string',
        example: 'simple'})
    name:string;
}
