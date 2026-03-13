import { PrismaModule } from "src/prisma/prisma.module";
import { Module } from "@nestjs/common";
import { MetadataExerciseController } from "./metadataExercise.controller";
import { MetadataExerciseService } from "./metadataExercise.service";

@Module({
    imports: [PrismaModule],
    controllers: [MetadataExerciseController],
    providers: [MetadataExerciseService],
})

export class MetadataExerciseModule {}