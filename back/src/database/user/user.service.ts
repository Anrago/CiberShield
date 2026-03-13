import {
  Injectable,
  Logger,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user';
import { UpdateUserDto } from '../user/dto/update-user';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { SupabaseService } from '../../supabase/subapase_client.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(
    createUserDto: CreateUserDto,
    image?: Express.Multer.File,
  ): Promise<User> {
    const emailExist = await this.prisma.user.findFirst({
      where: {
        OR: [
          { userName: createUserDto.userName },
          { email: createUserDto.email },
        ],
      },
    });

    if (emailExist) {
      this.logger.error(
        `User with email ${createUserDto.email} already exists`,
      );
      throw new ConflictException(
        `User with email ${createUserDto.email} already exists`,
      );
    }

    if (!createUserDto.password) {
      throw new Error('Password is required');
    }

    if (image) {
      try {
        // Multer con diskStorage guarda el archivo y provee la ruta en image.path
        createUserDto.imgPerfil = image.path.replace(process.cwd(), '').replace(/\\/g, '/');
        this.logger.log(`Imagen guardada localmente en: ${image.path}`);
      } catch (error) {
        console.log("🔥 ERROR REAL COMPLETO:", error);
        console.log("🔥 STACK:", error?.stack);
        this.logger.error(`Error al guardar la imagen localmente: ${error.message}`);
        throw new BadRequestException(`Error al guardar la imagen: ${error.message}`);
      }
    } else {
      createUserDto.imgPerfil = '/uploads/default-profile.png';
    }

    // Genera el hash de la contraseña
    const passwordHash = await bcrypt.hash(createUserDto.password, 10);
   

    const nuevoUsuario = {
      ...createUserDto,
      password: passwordHash,
    };

    // Crea el usuario
    return await this.prisma.user.create({
      data: nuevoUsuario,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(data: string) {
    return await this.prisma.user.findFirst({
      where: {
        OR: [{ userName: data }, { email: data }],
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id: id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id: id },
    });
  }
}
