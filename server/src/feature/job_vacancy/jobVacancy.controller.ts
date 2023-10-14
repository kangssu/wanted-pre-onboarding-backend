import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JobVacancyService as JobVacancyService } from './jobVacancy.service';
import {
  CreateJobVacancyDto as CreateJobVacancyDto,
  UpdateJobVacancyDto,
} from './jobVacancy.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { UserInfo } from 'src/decorator/userDecorator';
import { User } from 'src/entity/user.entity';
import { JobVacancy } from 'src/entity/jobVacancy.entity';
import { CompanyLib } from '../company/company.lib';
import { CustomException } from 'src/custom/customException';
import { ErrorCode } from 'src/enum/errorCode.enum';

@Controller({
  path: '/job-vacancy',
})
export class JobVacancyController {
  constructor(
    private readonly jobVacancyService: JobVacancyService,
    private readonly companyLib: CompanyLib,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createJobVacancy(
    @Body() createJobVacancyDto: CreateJobVacancyDto,
    @UserInfo() user: User,
  ): Promise<JobVacancy> {
    const company = await this.companyLib.getCompanyByUserId(user.id);

    if (!company) {
      throw new CustomException(ErrorCode.NOT_FOUND_COMPANY, 404);
    }

    return this.jobVacancyService.createJobVacancy(
      createJobVacancyDto,
      company.id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  updateJobVacancy(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJobVacancyDto: UpdateJobVacancyDto,
  ): Promise<JobVacancy> {
    return this.jobVacancyService.updateJobVacancy(updateJobVacancyDto, id);
  }

  @Get()
  getJobVacancies(): Promise<JobVacancy[]> {
    return this.jobVacancyService.getJobVacanciesAndCompany();
  }

  @Get('/:id')
  getJobVacancyAndCompanyById(@Param('id', ParseIntPipe) id: number): Promise<{
    jobVacancyAndCompany: JobVacancy;
    otherJobVacancyIds: number[];
  }> {
    return this.jobVacancyService.getJobVacancyAndCompanyById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteJobVacancy(@Param('id', ParseIntPipe) id: number): Promise<JobVacancy> {
    return this.jobVacancyService.deleteJobVacancy(id);
  }
}
