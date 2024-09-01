import { IsNotEmpty } from "class-validator";

export class UserResponseDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    nickname: string;

    constructor(id: number, nickname: string) {
        this.id = id;
        this.nickname = nickname;
    }
}