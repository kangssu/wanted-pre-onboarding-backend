import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './company.dto';
import { Company } from 'src/entity/company.entity';

@Controller({
  path: '/company',
})
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/create')
  createCompany(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto);
  }
}
