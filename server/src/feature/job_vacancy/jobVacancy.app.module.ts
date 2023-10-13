import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JabVacancy } from 'src/entity/jabVacancy.entity';
import { JabVacancyController } from './jobVacancy.controller';
import { JabVacancyService } from './jobVacancy.service';

@Module({
  imports: [TypeOrmModule.forFeature([JabVacancy])],
  providers: [JabVacancyService],
  controllers: [JabVacancyController],
})
export class JobVacancyModule {}
