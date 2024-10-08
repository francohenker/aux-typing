import { IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    nickname: string;
    @IsNotEmpty()
    password: string;
    
    constructor(nickname: string, password: string) {
        this.nickname = nickname;
        this.password = password;
    }
}