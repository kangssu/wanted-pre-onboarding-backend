import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email!: string;

  @IsString()
  name!: string;

  @IsString()
  nickname!: string;

  @IsString()
  password!: string;
}

export class LoginUserDto {
  @IsString()
  email!: string;

  @IsString()
  password!: string;
}
