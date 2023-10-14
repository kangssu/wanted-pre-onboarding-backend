import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './company.dto';
import { Company } from 'src/entity/company.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { UserInfo } from 'src/decorator/userDecorator';
import { User } from 'src/entity/user.entity';
import { CustomException } from 'src/custom/customException';
import { ErrorCode } from 'src/enum/errorCode.enum';

@UseGuards(JwtAuthGuard)
@Controller({
  path: '/company',
})
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
    @UserInfo() user: User,
  ): Promise<Company> {
    const companies = await this.companyService.getCompanyByUserEmailOrName(
      user.id,
      createCompanyDto.name,
    );

    if (companies) {
      for (const company of companies) {
        if (company.userId === user.id) {
          throw new CustomException(
            ErrorCode.REGISTERED_DUPLICATION_USER_ID,
            409,
          );
        }
        if (company.name === createCompanyDto.name) {
          throw new CustomException(ErrorCode.DUPLICATION_COMPANY_NAME, 409);
        }
      }
    }
    return this.companyService.createCompany(createCompanyDto, user.id);
  }
}
