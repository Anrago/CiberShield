import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsIn, IsInt, IsJSON, IsPositive, IsString } from "class-validator";

export class Exercise {
    @IsInt({message: 'id must be a number'})
    @IsPositive({message: 'id must be a positive number'})
    id:number;  
    
    @IsInt({message: 'levelId must be a number'})
    @IsPositive({message: 'levelId must be a positive number'})
    levelId:number      

    @IsInt({message: 'typeId must be a number'})
    @IsPositive({message: 'typeId must be a positive number'})
    typeId:number      

    // ({message: 'content must be a JSON'})
    @ApiProperty({description: 'content must be a JSON',
        example: '{"question": "What is the capital of France?", "options": ["Paris", "London", "Berlin"]}'})
    content:   Record<string, any>;

    @IsString({message: 'context must be a string'})
    @ApiProperty({description: 'context must be a string',
        example: 'This is a context to exercise.'})
    context:   string
    
    @IsBoolean({message: 'isPhising must be a boolean, true is a phishing exercise, false is a normal exercise'})
    isPhising: boolean  

    @IsDate({message: 'createAt must be a date'})
    createAt:  Date 

    exerciseResultId: number | null
}
