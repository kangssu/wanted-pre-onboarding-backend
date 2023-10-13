import { Body, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from 'src/entity/user.entity';

@Controller({
  path: '/user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
