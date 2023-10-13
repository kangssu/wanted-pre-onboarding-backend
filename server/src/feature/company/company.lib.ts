import { Injectable } from '@nestjs/common';
import { CompanyService } from './company.service';

@Injectable()
export class CompanyLib {
  constructor(private readonly companyService: CompanyService) {}

  getCompanyByUserId(userId: number) {
    return this.companyService.getCompanyByUserId(userId);
  }
}
