"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobVacancyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jabVacancy_entity_1 = require("../../entity/jabVacancy.entity");
const jobVacancy_controller_1 = require("./jobVacancy.controller");
const jobVacancy_service_1 = require("./jobVacancy.service");
let JobVacancyModule = class JobVacancyModule {
};
exports.JobVacancyModule = JobVacancyModule;
exports.JobVacancyModule = JobVacancyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([jabVacancy_entity_1.JabVacancy])],
        providers: [jobVacancy_service_1.JabVacancyService],
        controllers: [jobVacancy_controller_1.JabVacancyController],
    })
], JobVacancyModule);
//# sourceMappingURL=jobVacancy.app.module.js.map