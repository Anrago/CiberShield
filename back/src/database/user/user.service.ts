import { Injectable, Logger, ConflictException} from "@nestjs/common";
import { CreateUserDto } from "../user/dto/create-user";
import { UpdateUserDto } from "../user/dto/update-user";
import { PrismaService } from "src/prisma/prisma.service";
import {  User,UserSetting } from "@prisma/client";


@Injectable()
export class UserService {

    private readonly logger = new Logger(UserService.name);
    constructor(private readonly prisma:PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const emailExist = await this.prisma.user.findFirst({
            where:{
                OR: [
                    {userName: createUserDto.userName},
                    {email: createUserDto.email }
                ]
            }
        });

        if(emailExist){
            this.logger.error(`User with email ${createUserDto.email} already exists`);
            throw new ConflictException(`User with email ${createUserDto.email} already exists`);
        }

        return await  this.prisma.user.create({
            data: createUserDto,
        });



    }

    async findAll(){
        return await this.prisma.user.findMany();
    }

    async findOne(data:string){
        return await this.prisma.user.findFirst({
                where:{
                    OR: [
                        {userName: data},
                        {email: data }
                    ]
                },
        });
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        return await this.prisma.user.update({
            where:{id: id},
            data: updateUserDto
        });
    }

    async remove(id: number){
        return await this.prisma.user.delete({
            where:{id: id}
        });
    }
}