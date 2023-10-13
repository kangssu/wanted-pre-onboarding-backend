import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/feature/user/user.service';
import { LoginUserDto } from 'src/feature/user/user.dto';
import { User } from 'src/entity/user.entity';
import { CustomException } from 'src/custom/customException';
import { ErrorCode } from 'src/enum/errorCode.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  getUserByUserEmail(id: string) {
    return this.userService.getUserByUserEmail(id);
  }

  async validateUser(
    loginUserDto: LoginUserDto,
    user: User,
  ): Promise<{
    accessToken: string;
    user: User;
  }> {
    const passwordCheck = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );

    if (!passwordCheck) {
      throw new CustomException(ErrorCode.MISMATCH_PASSWORD, 400);
    }

    const payload = {
      id: user.id,
    };

    const accessToken = this.jwtService.sign(payload);
    return {
      accessToken: accessToken,
      user,
    };
  }
}
