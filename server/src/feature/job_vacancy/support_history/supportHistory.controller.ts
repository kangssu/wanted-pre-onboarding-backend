import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SupportHistoryService } from './supportHistory.service';
import { CreateSupportHistoryDto } from './supportHistory.dto';
import { SupportHistory } from 'src/entity/supportHistory.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { UserInfo } from 'src/decorator/userDecorator';
import { User } from 'src/entity/user.entity';
import { JobVacancyLib } from '../jobVacancy.lib';
import { CustomException } from 'src/custom/customException';
import { ErrorCode } from 'src/enum/errorCode.enum';

@UseGuards(JwtAuthGuard)
@Controller({
  path: '/job-vacancy/:jobVacancyId/support-history',
})
export class SupportHistoryController {
  constructor(
    private readonly supportHistoryService: SupportHistoryService,
    private readonly jobVacancyLib: JobVacancyLib,
  ) {}

  @Post()
  async createSupportHistory(
    @Body() createSupportHistoryDto: CreateSupportHistoryDto,
    @Param('jobVacancyId', ParseIntPipe) jobVacancyId: number,
    @UserInfo() user: User,
  ): Promise<SupportHistory> {
    const jobVacancy = await this.jobVacancyLib.getJobVacancyById(jobVacancyId);
    const supportHistory = await this.supportHistoryService.getSupportHistory(
      jobVacancyId,
      user.id,
    );

    if (!jobVacancy) {
      throw new CustomException(ErrorCode.NOT_FOUND_JOBVACANCY, 404);
    }
    if (supportHistory) {
      throw new CustomException(ErrorCode.JOB_VACANCY_ALREADY_APPLIED, 409);
    }

    return this.supportHistoryService.createSupportHistory(
      createSupportHistoryDto,
      user.id,
      jobVacancyId,
    );
  }

  @Delete()
  async cancelSupportHistory(
    @Param('jobVacancyId', ParseIntPipe) jobVacancyId: number,
    @UserInfo() user: User,
  ): Promise<SupportHistory> {
    const supportHistory =
      await this.supportHistoryService.getSupportHistoryByJobVacancyIdAndUserId(
        jobVacancyId,
        user.id,
      );

    return this.supportHistoryService.cancelSupportHistory(supportHistory.id);
  }
}
