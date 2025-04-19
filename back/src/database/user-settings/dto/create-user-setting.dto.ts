import {UserSetting as Modelo, UserSetting} from '../entities/user-setting.entity';
import { OmitType } from "@nestjs/swagger";

export class CreateUserSettingDto extends OmitType(UserSetting,[
    'theme',
    'language',
    'updateAt',
]) {}
