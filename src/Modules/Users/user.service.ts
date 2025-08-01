import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './Dtos/user.dto';
import {
  successResponse,
  errorResponse,
} from 'src/common/helper/response.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(data: CreateUserDto) {
    let { email, password } = data;
    try {
      const existingUser = await this.userRepository.findOneBy({ email });

      if (existingUser) {
        throw new BadRequestException('User exists already, kindly login');
      }
      //user password encryption using bcrypt
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      let newUser = this.userRepository.create(data);
      password = hashPassword;
      const user = await this.userRepository.save(newUser);

      successResponse(200, 'success', user);
    } catch (err) {
      if (err instanceof BadRequestException) {
        errorResponse(err.message, 400, 'BAD_REQUEST');
      }
      errorResponse(err.message, 500, 'INTERNAL_SERVER_ERROR');
    }
  }
}
