import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateJobVacancyDto {
  @IsNumber()
  @IsOptional()
  companyId?: number;

  @IsString()
  position!: string;

  @IsString()
  rewardPay!: string;

  @IsString()
  contents!: string;

  @IsString()
  skill!: string;
}

export class UpdateJobVacancyDto {
  @IsString()
  @IsOptional()
  position?: string;

  @IsString()
  @IsOptional()
  rewardPay?: string;

  @IsString()
  @IsOptional()
  contents?: string;

  @IsString()
  @IsOptional()
  skill?: string;
}
