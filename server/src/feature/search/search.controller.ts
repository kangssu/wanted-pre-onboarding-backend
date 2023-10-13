import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchJobVacancyDto } from './search.dto';
import { JobVacancy } from 'src/entity/jobVacancy.entity';

@Controller({
  path: '/search',
})
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/job-vacancy')
  searchJobVacancies(
    @Query() searchJobVacancyDto: SearchJobVacancyDto,
  ): Promise<JobVacancy[]> {
    return this.searchService.searchJobVacancies(searchJobVacancyDto);
  }
}
