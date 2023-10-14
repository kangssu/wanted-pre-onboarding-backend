import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportHistory } from 'src/entity/supportHistory.entity';
import { Repository } from 'typeorm';
import { CreateSupportHistoryDto } from './supportHistory.dto';

@Injectable()
export class SupportHistoryService {
  constructor(
    @InjectRepository(SupportHistory)
    private readonly supportHistoryRepository: Repository<SupportHistory>,
  ) {}

  createSupportHistory(
    createSupportHistoryDto: CreateSupportHistoryDto,
    userId: number,
    jobVacancyId: number,
  ): Promise<SupportHistory> {
    return this.supportHistoryRepository.save({
      ...createSupportHistoryDto,
      userId: userId,
      jobVacancyId: jobVacancyId,
    });
  }

  getSupportHistoryByJobVacancyIdAndUserId(
    jobVacancyId: number,
    userId: number,
  ): Promise<SupportHistory> {
    return this.supportHistoryRepository.findOne({
      where: { jobVacancyId: jobVacancyId, userId: userId },
    });
  }

  cancelSupportHistory(supportHistoryId: number): Promise<SupportHistory> {
    return this.supportHistoryRepository.softRemove({ id: supportHistoryId });
  }
}
