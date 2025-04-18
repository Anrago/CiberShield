import { User as Modelo  } from "@prisma/client";
import { UserSetting  } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, isBoolean, IsEmail, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";



export class User implements Modelo {
    @IsInt({message: 'id must be a number'})
    @IsPositive({message: 'id must be a positive number'})
    id: number;


    @ApiProperty({
        description: 'userName must be unique',
        uniqueItems: true,
        example: 'userName123' 
    })
    @IsString({message: 'userName must be a string'})
    @IsNotEmpty({message: 'userName must not be empty'})
    userName: string;

    @ApiProperty({
        description: 'email must be unique',
        uniqueItems: true,
        example: 'johndoe@example.com'
    })
    @IsEmail()
    email: string;


    @ApiProperty({
        description: 'password must be at least 8 characters long',
        minLength: 8,
        example: 'password123'
          
    })
    @IsString({message: 'password must be a string'})
    @IsNotEmpty({message: 'password must not be empty'})
    password: string;


    @ApiProperty({
        description: 'darkMode is a boolean that indicates if the user has dark mode enabled',
        example: true,
        default: false
    })
    @IsBoolean({message: 'darkMode must be a boolean'})
    darkMode: boolean;


    @ApiProperty({
        description: 'this field is used to idicate the cretion date of the user',
        example: '03/10/2023',
    })
    createdAt: Date;

    @ApiProperty({
        description: 'this field is used to idicate the last update date of the user and the user setting',
        example: '03/10/2023',
    })
    userSetting?: UserSetting;

    
    
}