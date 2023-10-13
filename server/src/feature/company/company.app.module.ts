import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company } from 'src/entity/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyLib } from './company.lib';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyService, CompanyLib],
  controllers: [CompanyController],
  exports: [CompanyLib],
})
export class CompanyModule {}
