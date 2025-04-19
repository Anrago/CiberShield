import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserService } from "./user.service";
import { UserSettingsModule } from "../user-settings/user-settings.module";

@Module({
    imports: [PrismaModule,UserSettingsModule],
    controllers: [UserController],
    providers: [UserService],
    
})

export class UserModule {}