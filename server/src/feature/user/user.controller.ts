import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from 'src/entity/user.entity';
import { ErrorCode } from 'src/enum/errorCode.enum';
import { CustomException } from 'src/custom/customException';

@Controller({
  path: '/user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/sign-up')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userService.getUserByEmailOrNickname(createUserDto);

    if (user) {
      if (user.email === createUserDto.email) {
        throw new CustomException(ErrorCode.DUPLICATION_EMAIL, 409);
      }
      if (user.nickname === createUserDto.nickname) {
        throw new CustomException(ErrorCode.DUPLICATION_NICKNAME, 409);
      }
    }

    return this.userService.createUser(createUserDto);
  }
}
