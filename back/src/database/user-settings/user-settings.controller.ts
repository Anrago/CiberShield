import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateUserSettingDto } from './dto/create-user-setting.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user-settings')
export class UserSettingsController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  @ApiBody({
    description: 'Create a new user setting',
  })
  @ApiResponse({
    status: 201,
    description: 'User setting created successfully',
    type: CreateUserSettingDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflict: User setting already exists',
    type: CreateUserSettingDto,
  })
  createUserSettings(@Body() createUserSettingDto: CreateUserSettingDto) : Promise<CreateUserSettingDto> {
    return this.prisma.userSetting.create({
      data: createUserSettingDto,
    });
  }



  @Get(':id')
  @ApiBody({
    description: 'Get user setting by user id',
  })
  @ApiParam({name: 'id', description: 'user id'})
  @ApiResponse({
    status: 200,
    description: 'User setting found',
    type: CreateUserSettingDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User setting not found',
  })
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.prisma.userSetting.findUnique(
      {
        include: {
          User: true,
        },
        where: { userId: id }
        
      },
    );
  }


  @Get()
  findAll() {
    return this.prisma.userSetting.findMany({
      include: {
        User: true,
      },
    });
  }

  @Patch(':id')
  @ApiBody({
    description: 'Update user setting by user id'
  })
  @ApiParam({name: 'id', description: 'user id'})
  @ApiResponse({
    status: 200,
    description: 'User setting updated successfully',
    type: CreateUserSettingDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User setting not found',
  })
  update(@Param('id',ParseIntPipe) id: number, @Body() updateUserSettingDto: CreateUserSettingDto) {
    return this.prisma.userSetting.update({
      where: { userId: id },
      data: updateUserSettingDto,
    });
  }

}
