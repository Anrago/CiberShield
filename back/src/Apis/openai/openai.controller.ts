import { Body, Controller, Get, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('getexercise')
export class OpenaiController {
  private readonly openai = new OpenaiService();

  @ApiBody({ description: 'Create exercise', type: String })
  @Post('email/simple')
  async createExerciseSimple(@Body('prompt') prompt: string): Promise<any> {
    const response = await this.openai.createExcesiSimplePost(prompt);
    return response;
  }
  @Post('email/medium')
  async createExerciseMedium(@Body('prompt') prompt: string): Promise<any> {
    const response = await this.openai.createExcesiMediumPost(prompt);
    return response;
  }
  @Post('email/complex')
  async createExerciseComplex(@Body('prompt') prompt: string): Promise<any> {
    const response = await this.openai.createExcesiComplexPost(prompt);
    return response;
  }

  //   @Get('simple')
  //   async getExerciseSimple(): Promise<any> {
  //     const response = await this.openai.createExcesiSimple();
  //     return response;
  //   }
  //   @Get('medium')
  //   async getExerciseMedium(): Promise<any> {
  //     const response = await this.openai.createExcesiMedium();
  //     return response;
  //   }
  //   @Get('complex')
  //   async getExerciseComplex(): Promise<any> {
  //     const response = await this.openai.createExcesiComplex();
  //     return response;
  //   }
}
