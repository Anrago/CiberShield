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

    // Verifica que la contraseña no sea nula o vacía
    if (!createUserDto.password) {
      throw new Error('Password is required');
    }

    if (image) {
      try {
        // Validate image buffer
        if (!image.buffer || image.buffer.length === 0) {
          this.logger.error('Image buffer is empty');
          throw new BadRequestException('Invalid image: buffer is empty');
        }

        this.logger.log(
          `Processing image: ${image.originalname}, size: ${image.size} bytes, mimetype: ${image.mimetype}`,
        );

        const supabase = this.supabaseService.getClient();

        const fileExtension = image.originalname.split('.').pop();
        const fileName = `${Date.now()}_${createUserDto.userName}.${fileExtension}`;
        const filePath = `images/${fileName}`;

        // Log buffer size before upload
        this.logger.log(
          `Uploading image with buffer size: ${image.buffer.length} bytes`,
        );

        // Upload file with proper content type and caching disabled
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('img-cibershield')
          .upload(filePath, image.buffer, {
            contentType: image.mimetype,
            upsert: true,
            cacheControl: 'no-cache',
          });

        if (uploadError) {
          this.logger.error(
            `Error uploading image: ${JSON.stringify(uploadError)}`,
          );
          throw new Error(`Error uploading image: ${uploadError.message}`);
        }

        this.logger.log(`Image uploaded successfully: ${filePath}`);

        // Get the public URL with a timestamp parameter to prevent caching
        const { data } = supabase.storage
          .from('img-cibershield')
          .getPublicUrl(`${filePath}?t=${Date.now()}`);

        if (!data || !data.publicUrl) {
          this.logger.error('Failed to get public URL for uploaded image');
          throw new Error('Failed to get public URL for uploaded image');
        }

        createUserDto.imgPerfil = data.publicUrl;
        this.logger.log(`Image public URL set: ${createUserDto.imgPerfil}`);
      } catch (error) {
        this.logger.error(`Image upload process failed: ${error.message}`);
        throw new BadRequestException(
          `Failed to process image: ${error.message}`,
        );
      }
    } else {
      createUserDto.imgPerfil =
        'https://wnkklcpvutfuacwrufuv.supabase.co/storage/v1/object/public/img-cibershield/images/default-profile.png';
    }


    const passwordHash = await bcrypt.hash(createUserDto.password, 10);
    console.log(passwordHash);

    const nuevoUsuario = {
      ...createUserDto,
      password: passwordHash,
    };


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
