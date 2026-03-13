import { Body, Controller, Get, Post } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('getexercise')
export class OpenaiController {
  private readonly openai = new OpenaiService();

  @ApiBody({ description: 'Create exercise', type: String })
  @Post('email/simple')
  async createExerciseSimple(@Body('prompt') prompt: string): Promise<any> {
    console.log('entro en Email simple');
    const response = await this.openai.createExcesiSimplePost(prompt);
    return response;
  }
  @Post('email/medium')
  async createExerciseMedium(@Body('prompt') prompt: string): Promise<any> {
    console.log('entro en Email medium');
    const response = await this.openai.createExcesiMediumPost(prompt);
    return response;
  }
  @Post('email/complex')
  async createExerciseComplex(@Body('prompt') prompt: string): Promise<any> {
    console.log('entro en Email complex');
    const response = await this.openai.createExcesiComplexPost(prompt);
    return response;
  }

  @Post('sms/simple')
  async createSmsSimple(@Body('prompt') prompt: string): Promise<any> {
    console.log('entro en Sms simple');
    const response = await this.openai.createExcesiSMSSimplePost(prompt);
    return response;
  }

  @Post('sms/medium')
  async createSmsMedium(@Body('prompt') prompt: string): Promise<any> {
    console.log('entro en Sms medium');
    const response = await this.openai.createExcesiSMSMediumPost(prompt);
    return response;
  }
  
  @Post('sms/complex')
  async createSmsComplex(@Body('prompt') prompt: string): Promise<any> {
    console.log('entro en Sms complex');
    const response = await this.openai.createExcesiSMSComplexPost(prompt);
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
