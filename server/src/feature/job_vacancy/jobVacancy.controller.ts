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

@Controller({
  path: '/job-vacancy',
})
export class JobVacancyController {
  constructor(private readonly jobVacancyService: JobVacancyService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createJobVacancy(
    @Body() createJobVacancyDto: CreateJobVacancyDto,
    @UserInfo() user: User,
  ): Promise<JobVacancy> {
    return this.jobVacancyService.createJobVacancy(
      createJobVacancyDto,
      user.id,
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
