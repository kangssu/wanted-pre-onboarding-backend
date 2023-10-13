import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsString()
  name!: string;

  @IsString()
  nation!: string;

  @IsString()
  area!: string;
}
