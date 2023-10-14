import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobVacancy } from 'src/entity/jobVacancy.entity';
import { Repository } from 'typeorm';
import { SearchJobVacancyDto } from '../search/search.dto';

@Injectable()
export class JobVacancyLib {
  constructor(
    @InjectRepository(JobVacancy)
    private readonly jobVacancyRepository: Repository<JobVacancy>,
  ) {}

  async searchJobVacancies(
    searchJobVacancyDto: SearchJobVacancyDto,
  ): Promise<JobVacancy[]> {
    const query = this.jobVacancyRepository
      .createQueryBuilder('job_vacancies')
      .leftJoinAndSelect('job_vacancies.company', 'company');

    if (searchJobVacancyDto.companyName) {
      query.andWhere(
        `company.name Like "%${searchJobVacancyDto.companyName}%"`,
      );
    }
    if (searchJobVacancyDto.nation) {
      query.andWhere(`company.nation Like "%${searchJobVacancyDto.nation}%"`);
    }
    if (searchJobVacancyDto.area) {
      query.andWhere(`company.area Like "%${searchJobVacancyDto.area}%"`);
    }
    if (searchJobVacancyDto.contents) {
      query.andWhere(
        `job_vacancies.contents Like "%${searchJobVacancyDto.contents}%"`,
      );
    }
    if (searchJobVacancyDto.position) {
      query.andWhere(
        `job_vacancies.position Like "%${searchJobVacancyDto.position}%"`,
      );
    }
    if (searchJobVacancyDto.skill) {
      query.andWhere(
        `job_vacancies.skill Like "%${searchJobVacancyDto.skill}%"`,
      );
    }

    const jobVacancies = await query.getMany();
    return jobVacancies;
  }

  getJobVacancyById(id: number): Promise<JobVacancy> {
    return this.jobVacancyRepository.findOne({ where: { id } });
  }
}
