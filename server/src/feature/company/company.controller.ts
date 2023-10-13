import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './company.dto';
import { Company } from 'src/entity/company.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { UserInfo } from 'src/decorator/userDecorator';
import { User } from 'src/entity/user.entity';

@Controller({
  path: '/company',
})
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
    @UserInfo() user: User,
  ): Promise<Company> {
    return this.companyService.createCompany(createCompanyDto, user.id);
  }
}
