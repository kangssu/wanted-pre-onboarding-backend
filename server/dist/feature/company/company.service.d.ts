import { Company } from 'src/entity/company.entity';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './company.dto';
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: Repository<Company>);
    createCompany(createCompanyDto: CreateCompanyDto): Promise<Company>;
}
