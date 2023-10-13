"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const company_app_module_1 = require("./feature/company/company.app.module");
const user_entity_1 = require("./entity/user.entity");
const company_entity_1 = require("./entity/company.entity");
const jabVacancy_entity_1 = require("./entity/jabVacancy.entity");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_app_module_1 = require("./feature/user/user.app.module");
const jobVacancy_app_module_1 = require("./feature/job_vacancy/jobVacancy.app.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [user_entity_1.User, company_entity_1.Company, jabVacancy_entity_1.JabVacancy],
                synchronize: false,
                logging: true,
                keepConnectionAlive: true,
            }),
            user_app_module_1.UserModule,
            company_app_module_1.CompanyModule,
            jobVacancy_app_module_1.JobVacancyModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map