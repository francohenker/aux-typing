import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3, {
        message: 'Nickname must be at least 4 characters',
    })
    nickname: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8, {
        message: 'Password must be at least 8 characters',
    })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'the password must be content with at least one uppercase letter, one lowercase letter, one number and one special character.',
      })
    password: string;
    
    @IsNotEmpty()
    @IsString()
    admin: boolean;



}