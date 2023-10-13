import { Company } from 'src/entity/company.entity';
import { Repository } from 'typeorm';
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: Repository<Company>);
}
