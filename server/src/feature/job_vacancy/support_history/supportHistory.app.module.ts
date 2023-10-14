import { Module } from '@nestjs/common';
import { SupportHistoryService } from './supportHistory.service';
import { SupportHistoryController } from './supportHistory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportHistory } from 'src/entity/supportHistory.entity';
import { JobVacancyModule } from '../jobVacancy.app.module';

@Module({
  imports: [TypeOrmModule.forFeature([SupportHistory]), JobVacancyModule],
  providers: [SupportHistoryService],
  controllers: [SupportHistoryController],
})
export class SupportHistoryModule {}
