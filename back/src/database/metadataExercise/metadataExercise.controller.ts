import { Controller, Get, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { MetadataExerciseService } from "./metadataExercise.service";
import { ApiBody } from "@nestjs/swagger";

@Controller('metadataExercise')
@Injectable()
export class MetadataExerciseController {
    constructor(private readonly prisma:PrismaService){}
    

    @Get()
    @ApiBody({description: 'Get all levels exercise', type: String})
    getLevels() {
        return this.prisma.exerciseLevel.findMany();
    }

    @Get()
    @ApiBody({description: 'Get all types exercise', type: String})
    getTypes() {
        return this.prisma.exerciseType.findMany();
    }
}

