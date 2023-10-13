import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from 'src/entity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
