import { IsNotEmpty, IsString, Max, Min } from "class-validator";


export class LoginUserDto {
    @IsNotEmpty()
    @IsString()
    nickname: string;

    @IsNotEmpty()
    @IsString()
    // @Min(8, {
    //     message: 'Password must be at least 8 characters',
    // })
    password: string;
}