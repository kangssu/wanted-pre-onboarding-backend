import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { JobVacancyModule } from '../job_vacancy/jobVacancy.app.module';

@Module({
  imports: [JobVacancyModule],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
