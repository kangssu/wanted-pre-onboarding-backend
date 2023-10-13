import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const bcryptPassword = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = bcryptPassword;
    const createUser = this.userRepository.save(createUserDto);
    return createUser;
  }

  async getUserByEmailOrNickname(createUserDto: CreateUserDto) {
    return await this.userRepository
      .createQueryBuilder('users')
      .where('(users.email=:email) OR (users.nickname=:nickname)', {
        email: createUserDto.email,
        nickname: createUserDto.nickname,
      })
      .getOne();
  }

  getUserByUserEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
