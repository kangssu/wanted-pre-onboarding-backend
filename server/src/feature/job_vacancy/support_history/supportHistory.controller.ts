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

@UseGuards(JwtAuthGuard)
@Controller({
  path: '/job-vacancy/:jobVacancyId/support-history',
})
export class SupportHistoryController {
  constructor(private readonly supportHistoryService: SupportHistoryService) {}

  @Post()
  createSupportHistory(
    @Body() createSupportHistoryDto: CreateSupportHistoryDto,
    @Param('jobVacancyId', ParseIntPipe) jobVacancyId: number,
    @UserInfo() user: User,
  ): Promise<SupportHistory> {
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
