import { Module } from '@nestjs/common';
import { SupportHistoryService } from './supportHistory.service';
import { SupportHistoryController } from './supportHistory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportHistory } from 'src/entity/supportHistory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SupportHistory])],
  providers: [SupportHistoryService],
  controllers: [SupportHistoryController],
})
export class SupportHistoryModule {}
