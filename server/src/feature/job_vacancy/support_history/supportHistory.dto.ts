import { IsNumber, IsOptional } from 'class-validator';

export class CreateSupportHistoryDto {
  @IsNumber()
  @IsOptional()
  jobVacancyId?: number;

  @IsNumber()
  @IsOptional()
  userId?: number;
}
