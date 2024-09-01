import { IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    nickname: string;
    @IsNotEmpty()
    password: string;
}