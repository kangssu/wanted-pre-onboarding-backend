import { IsOptional, IsString } from 'class-validator';

export class SearchJobVacancyDto {
  @IsString()
  @IsOptional()
  companyName?: string;

  @IsString()
  @IsOptional()
  nation?: string;

  @IsString()
  @IsOptional()
  area?: string;

  @IsString()
  @IsOptional()
  position?: string;

  @IsString()
  @IsOptional()
  contents?: string;

  @IsString()
  @IsOptional()
  skill?: string;
}
