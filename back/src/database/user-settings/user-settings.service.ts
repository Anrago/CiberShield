import { Injectable } from '@nestjs/common';
import { CreateUserSettingDto } from './dto/create-user-setting.dto';
import { UpdateUserSettingDto } from './dto/update-user-setting.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, UserSetting } from '@prisma/client';

@Injectable()
export class UserSettingsService {

  constructor(private readonly prisma: PrismaService) {}


  async create(createUserSettingDto: CreateUserSettingDto):Promise<UserSetting> {
    return await this.prisma.userSetting.create({
      data: createUserSettingDto,
    });
    
  }

  findAll() {
    return this.prisma.userSetting.findMany({
      include: {
        User: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.userSetting.findUnique({
      where: { userId: id },
      include: {
        User: true,
      },
    });
  }

  update(id: number, updateUserSettingDto: UpdateUserSettingDto) {
    return this.prisma.userSetting.update({
      where: { userId: id },
      data: updateUserSettingDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} userSetting`;
  }
}
