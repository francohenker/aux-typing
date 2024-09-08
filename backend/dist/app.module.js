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
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users/entities/users.entity");
const users_module_1 = require("./users/users.module");
const users_service_1 = require("./users/users.service");
const users_controller_1 = require("./users/users.controller");
const phrase_entity_1 = require("./phrase/entities/phrase.entity");
const phrase_module_1 = require("./phrase/phrase.module");
const phrase_service_1 = require("./phrase/phrase.service");
const phrase_controller_1 = require("./phrase/phrase.controller");
const phrase_to_users_entity_1 = require("./phrase-to-user/entities/phrase-to-users.entity");
const phrase_to_user_module_1 = require("./phrase-to-user/phrase-to-user.module");
const phrase_to_user_controller_1 = require("./phrase-to-user/phrase-to-user.controller");
const phrase_to_user_service_1 = require("./phrase-to-user/phrase-to-user.service");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db/db.sqlite',
                entities: [users_entity_1.Users, phrase_entity_1.Phrase, phrase_to_users_entity_1.PhraseToUsers],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.Users, phrase_entity_1.Phrase, phrase_to_users_entity_1.PhraseToUsers]),
            users_module_1.UsersModule,
            phrase_module_1.PhraseModule,
            phrase_to_user_module_1.PhraseToUserModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, phrase_controller_1.PhraseController, phrase_to_user_controller_1.PhraseToUserController],
        providers: [app_service_1.AppService, users_service_1.UsersService, phrase_service_1.PhraseService, phrase_to_user_service_1.PhraseToUserService, jwt_1.JwtService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map