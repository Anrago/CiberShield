import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';

import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from './dto/create-user';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly prisma:PrismaService){}


    @Post()
    @ApiBody({description: 'Create user', type: CreateUserDto})
    @ApiResponse({status: 201, description: 'User created', type: CreateUserDto})
    @ApiResponse({status: 400, description: 'Bad request'})
    @ApiResponse({status: 409, description: 'Conflict: Email or username in use', type: CreateUserDto})
    @UsePipes(new ValidationPipe({transform: true}))
    createUser(@Body() createUserDto: CreateUserDto) : Promise<CreateUserDto> {
        return this.prisma.user.create({
            data: createUserDto
        });
    }


    @Get()
    @ApiBody({description: 'Get all users', type: CreateUserDto})
    @ApiResponse({status: 200, description: 'Users found'})
    findAll() {
        return this.prisma.user.findMany();
    }

    
    @Get(':data')
    @ApiBody({description: 'Get user by username or email', type: CreateUserDto})
    @ApiParam({name: 'data', description: 'username or email'})
    @ApiResponse({status: 200, description: 'User found'})
    findOne(@Param('data') data: string) {
        return this.prisma.user.findFirst({
            where:{
                OR: [
                    {userName: data},
                    {email: data }
                ]
            }
        });
    }

    @Patch(':id')
    @ApiBody({description: 'Update user', type: CreateUserDto})
    @ApiParam({name: 'id', description: 'user id'})
    @ApiResponse({status: 200, description: 'User updated', type: CreateUserDto})
    update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
        return this.prisma.user.update({
            where:{id: Number(id)},
            data: updateUserDto
        });
    }
}