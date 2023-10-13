import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './feature/company/company.app.module';
import { User } from './entity/user.entity';
import { Company } from './entity/company.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './feature/user/user.app.module';
import { JobVacancyModule } from './feature/job_vacancy/jobVacancy.app.module';
import { AuthModule } from './auth/auth.app.module';
import { SearchModule } from './feature/search/search.app.module';
import { JobVacancy } from './entity/jobVacancy.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Company, JobVacancy],
      synchronize: false,
      logging: true,
      keepConnectionAlive: true,
    }),
    AuthModule,
    UserModule,
    CompanyModule,
    JobVacancyModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
