import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from 'src/feature/user/user.dto';
import { CustomException } from 'src/custom/customException';
import { ErrorCode } from 'src/enum/errorCode.enum';
import { User } from 'src/entity/user.entity';

@Controller({
  path: '/auth',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async loginUser(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<{ accessToken: string; user: User }> {
    const user = await this.authService.getUserByUserEmail(loginUserDto.email);

    if (!user) {
      throw new CustomException(ErrorCode.NOT_FOUND_EMAIL, 404);
    } else {
      const validateUser = await this.authService.validateUser(
        loginUserDto,
        user,
      );

      return {
        accessToken: validateUser.accessToken,
        user,
      };
    }
  }
}
