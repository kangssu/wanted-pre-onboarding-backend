"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JabVacancy = void 0;
const typeorm_1 = require("typeorm");
let JabVacancy = class JabVacancy {
};
exports.JabVacancy = JabVacancy;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], JabVacancy.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JabVacancy.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JabVacancy.prototype, "rewardPay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JabVacancy.prototype, "contents", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], JabVacancy.prototype, "skill", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], JabVacancy.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], JabVacancy.prototype, "deletedAt", void 0);
exports.JabVacancy = JabVacancy = __decorate([
    (0, typeorm_1.Entity)('job_vacancies')
], JabVacancy);
//# sourceMappingURL=jabVacancy.entity.js.map