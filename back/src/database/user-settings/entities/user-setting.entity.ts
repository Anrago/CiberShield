import { UserSetting as Modelo } from "@prisma/client";
import { IsDate, IsInt, IsPositive, IsString } from "class-validator";
export class UserSetting implements Modelo {
    @IsInt({ message: 'id must be a number' })
    @IsPositive({ message: 'id must be a positive number' })
    userId: number;

    @IsString({ message: 'theme must be a string' })
    theme: string;

    @IsString({ message: 'language must be a string' })
    language: string;

    @IsDate({ message: 'createdAt must be a date' })
    updateAt: Date;
}
