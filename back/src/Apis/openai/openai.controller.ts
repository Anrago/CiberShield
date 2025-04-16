import { Body, Controller, Get, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';
@Controller('getexercise')
export class OpenaiController {

    private readonly openai = new OpenaiService();

    @Post('simple')
    async createExerciseSimple(): Promise<any>{
        const response = await this.openai.createExcesiSimple();
        return response;
    }
    @Post('medium')
    async createExerciseMedium(): Promise<any>{
        const response = await this.openai.createExcesiMedium();
        return response;
    }
    @Post('complex')
    async createExerciseComplex(): Promise<any>{
        const response = await this.openai.createExcesiComplex();
        return response;
    }

    @Get('simple')
    async getExerciseSimple(): Promise<any>{
        const response = await this.openai.createExcesiSimple();
        return response;
    }
    @Get('medium')
    async getExerciseMedium(): Promise<any>{
        const response = await this.openai.createExcesiMedium();
        return response;
    }
    @Get('complex')
    async getExerciseComplex(): Promise<any>{
        const response = await this.openai.createExcesiComplex();
        return response;
    }


}
