import { Injectable } from '@nestjs/common';
import { SearchJobVacancyDto } from './search.dto';
import { JobVacancyLib } from '../job_vacancy/jobVacancy.lib';
import { JobVacancy } from 'src/entity/jobVacancy.entity';

@Injectable()
export class SearchService {
  constructor(private readonly jobVacancyLib: JobVacancyLib) {}

  searchJobVacancies(
    searchJobVacancyDto: SearchJobVacancyDto,
  ): Promise<JobVacancy[]> {
    return this.jobVacancyLib.searchJobVacancies(searchJobVacancyDto);
  }
}
