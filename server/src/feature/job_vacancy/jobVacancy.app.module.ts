import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobVacancy } from 'src/entity/jobVacancy.entity';
import { JobVacancyController } from './jobVacancy.controller';
import { JobVacancyService } from './jobVacancy.service';
import { CompanyModule } from '../company/company.app.module';
import { JobVacancyLib } from './jobVacancy.lib';

@Module({
  imports: [TypeOrmModule.forFeature([JobVacancy]), CompanyModule],
  providers: [JobVacancyService, JobVacancyLib],
  controllers: [JobVacancyController],
  exports: [JobVacancyLib],
})
export class JobVacancyModule {}
