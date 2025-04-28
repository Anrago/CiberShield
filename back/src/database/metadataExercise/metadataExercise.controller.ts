import { Controller, Get, Injectable } from "@nestjs/common";
import { MetadataExerciseService } from "./metadataExercise.service";
import { ApiBody } from "@nestjs/swagger";

@Controller('metadataExercise')
@Injectable()
export class MetadataExerciseController {
    constructor(private readonly metaDataService: MetadataExerciseService){}
    

    @Get("levels")
    @ApiBody({description: 'Get all levels exercise', type: String})
    getLevels() {
        return this.metaDataService.getLevels();
    }

    @Get("types")
    @ApiBody({description: 'Get all types exercise', type: String})
    getTypes() {
        return this.metaDataService.getTypes();
    }
}

