import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobVacancy } from 'src/entity/jobVacancy.entity';
import { Repository } from 'typeorm';
import { CreateJobVacancyDto, UpdateJobVacancyDto } from './jobVacancy.dto';
import { CompanyLib } from '../company/company.lib';

@Injectable()
export class JobVacancyService {
  constructor(
    @InjectRepository(JobVacancy)
    private readonly jobVacancyRepository: Repository<JobVacancy>,
    private readonly companyLib: CompanyLib,
  ) {}

  async createJobVacancy(
    createJobVacancyDto: CreateJobVacancyDto,
    userId: number,
  ): Promise<JobVacancy> {
    const company = await this.companyLib.getCompanyByUserId(userId);
    const replaceRewardPay = createJobVacancyDto.rewardPay.replaceAll(
      '[^0-9]',
      '',
    );

    const createJobVacancy = await this.jobVacancyRepository.save({
      ...createJobVacancyDto,
      companyId: company.id,
      rewardPay: replaceRewardPay,
    });

    return createJobVacancy;
  }

  async updateJobVacancy(
    updateJobVacancyDto: UpdateJobVacancyDto,
    id: number,
  ): Promise<JobVacancy> {
    const jobVacancy = await this.jobVacancyRepository.findOne({
      where: { id },
    });

    if (updateJobVacancyDto.position) {
      jobVacancy.position = updateJobVacancyDto.position;
    }
    if (updateJobVacancyDto.rewardPay) {
      jobVacancy.rewardPay = updateJobVacancyDto.rewardPay;
    }
    if (updateJobVacancyDto.contents) {
      jobVacancy.contents = updateJobVacancyDto.contents;
    }
    if (updateJobVacancyDto.skill) {
      jobVacancy.skill = updateJobVacancyDto.skill;
    }

    const updateJobVacancy = await this.jobVacancyRepository.save(jobVacancy);
    return updateJobVacancy;
  }

  async getJobVacanciesAndCompany(): Promise<JobVacancy[]> {
    const jobVacancyAndCompany = await this.jobVacancyRepository
      .createQueryBuilder('job_vacancies')
      .leftJoinAndSelect('job_vacancies.company', 'company')
      .getMany();

    return jobVacancyAndCompany;
  }

  async getJobVacancyAndCompanyById(id: number): Promise<{
    jobVacancyAndCompany: JobVacancy;
    otherJobVacancyIds: number[];
  }> {
    const jobVacancyAndCompany = await this.jobVacancyRepository
      .createQueryBuilder('job_vacancies')
      .leftJoinAndSelect('job_vacancies.company', 'company')
      .where({ id: id })
      .getOne();

    const otherJobVacancyByCompany = await this.jobVacancyRepository
      .createQueryBuilder('job_vacancies')
      .where('job_vacancies.id not in (:id)', {
        id: id,
      })
      .andWhere('job_vacancies.companyId=:companyId', {
        companyId: jobVacancyAndCompany.companyId,
      })
      .getMany();

    const otherJobVacancyIds = otherJobVacancyByCompany.map((res) => res.id);

    return {
      jobVacancyAndCompany: jobVacancyAndCompany,
      otherJobVacancyIds: otherJobVacancyIds,
    };
  }

  deleteJobVacancy(id: number): Promise<JobVacancy> {
    return this.jobVacancyRepository.softRemove({ id });
  }
}
