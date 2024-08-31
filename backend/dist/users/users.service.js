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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./entities/users.entity");
const typeorm_2 = require("typeorm");
const phrase_to_users_entity_1 = require("../phrase-to-user/entities/phrase-to-users.entity");
let UsersService = class UsersService {
    constructor(usersRepository, PhraseToUsersRepository) {
        this.usersRepository = usersRepository;
        this.PhraseToUsersRepository = PhraseToUsersRepository;
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async getUserByName(name) {
        return await this.usersRepository.findOneBy({
            nickname: name,
        });
    }
    async getUserById(id) {
        return await this.usersRepository.findOneBy({
            id: id,
        });
    }
    async create(user) {
        const userSearch = await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });
        if (userSearch) {
            throw new Error('User already exists');
        }
        try {
            const userNew = this.usersRepository.create(user);
            return await this.usersRepository.save(userNew);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getMaxWpm() {
        return await this.PhraseToUsersRepository
            .createQueryBuilder('utp')
            .select('utp.user', 'user_id')
            .addSelect('MAX(utp.wpm)', 'max_wpm')
            .innerJoin('utp.user', 'u')
            .addSelect('u.nickname', 'nickname')
            .groupBy('utp.user')
            .addGroupBy('u.nickname')
            .getRawMany();
    }
    async login(user) {
        const userNew = await this.usersRepository.findOneBy({
            nickname: user.nickname,
        });
        if (!userNew) {
            throw new Error('User not found');
        }
        return userNew;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(phrase_to_users_entity_1.PhraseToUsers)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map