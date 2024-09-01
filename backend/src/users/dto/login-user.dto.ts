import { IsNotEmpty } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty()
    nickname: string;
    @IsNotEmpty()
    password: string;
}