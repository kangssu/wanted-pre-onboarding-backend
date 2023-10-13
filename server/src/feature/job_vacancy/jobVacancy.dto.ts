import { IsString } from 'class-validator';

export class CreateJabVacancyDto {
  @IsString()
  position!: string;

  @IsString()
  rewardPay!: string;

  @IsString()
  contents!: string;

  @IsString()
  skill!: string;
}
