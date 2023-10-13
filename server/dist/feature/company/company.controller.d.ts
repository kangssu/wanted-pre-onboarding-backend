import { CompanyService } from './company.service';
import { CreateCompanyDto } from './company.dto';
import { Company } from 'src/entity/company.entity';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
}
