import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()

export class MetadataExerciseService {
    constructor(private readonly prisma:PrismaService){}

    getLevels() {
        return this.prisma.exerciseLevel.findMany();
    }

    getTypes() {
        return this.prisma.exerciseType.findMany();
    }
}
