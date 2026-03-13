import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user';
import {
  ApiBody,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiConsumes,
} from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userName: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User created',
    type: CreateUserDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({
    status: 409,
    description: 'Conflict: Email or username in use',
    type: CreateUserDto,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileExtension = file.originalname.split('.').pop();
          const fileName = `${Date.now()}_${req.body.userName}.${fileExtension}`;
          cb(null, fileName);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
    }),
  )
  createUser(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<CreateUserDto> {
    console.log('Image received:', image ? 'Yes' : 'No');
    if (image) {
      console.log('Image size:', image.size, 'bytes');
      console.log('Image mimetype:', image.mimetype);
    }
    return this.userService.create(createUserDto, image);
  }

  @Get()
  @ApiBody({ description: 'Get all users', type: CreateUserDto })
  @ApiResponse({ status: 200, description: 'Users found' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':data')
  @ApiBody({
    description: 'Get user by username or email',
    type: CreateUserDto,
  })
  @ApiParam({ name: 'data', description: 'username or email' })
  @ApiResponse({ status: 200, description: 'User found' })
  findOne(@Param('data') data: string) {
    return this.userService.findOne(data);
  }

  @Patch(':id')
  @ApiBody({ description: 'Update user', type: CreateUserDto })
  @ApiParam({ name: 'id', description: 'user id' })
  @ApiResponse({
    status: 200,
    description: 'User updated',
    type: CreateUserDto,
  })
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
}
