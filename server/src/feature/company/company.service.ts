import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/entity/company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createCompany = this.companyRepository.save(createCompanyDto);
    return createCompany;
  }
}
