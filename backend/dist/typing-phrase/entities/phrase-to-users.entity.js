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
exports.PhraseToUsers = void 0;
const users_entity_1 = require("../../users/entities/users.entity");
const typeorm_1 = require("typeorm");
const phrase_entity_1 = require("./phrase.entity");
let PhraseToUsers = class PhraseToUsers {
};
exports.PhraseToUsers = PhraseToUsers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PhraseToUsers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PhraseToUsers.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users),
    __metadata("design:type", users_entity_1.Users)
], PhraseToUsers.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => phrase_entity_1.Phrase),
    __metadata("design:type", phrase_entity_1.Phrase)
], PhraseToUsers.prototype, "phrase", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PhraseToUsers.prototype, "wpm", void 0);
exports.PhraseToUsers = PhraseToUsers = __decorate([
    (0, typeorm_1.Entity)()
], PhraseToUsers);
//# sourceMappingURL=phrase-to-users.entity.js.map