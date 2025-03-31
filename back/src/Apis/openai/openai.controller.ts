import { Body, Controller, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';
@Controller('getexercise')
export class OpenaiController {

    private readonly openai = new OpenaiService();

    @Post('simple')
    async createExerciseSimple(@Body ('prompt') prompt: string): Promise<any>{
        const response = await this.openai.createExcesiSimple(prompt);
        return response;
    }
    @Post('medium')
    async createExerciseMedium(@Body ('prompt') prompt: string): Promise<any>{
        const response = await this.openai.createExcesiMedium(prompt);
        return response;
    }
    @Post('complex')
    async createExerciseComplex(@Body ('prompt') prompt: string): Promise<any>{
        const response = await this.openai.createExcesiComplex(prompt);
        return response;
    }

}
