export declare class Users {
    id: number;
    nickname: string;
    password: string;
    admin: boolean;
    validatePassword(password: string): Promise<boolean>;
    hashPassword(): Promise<void>;
    constructor(nickname: string, password: string, admin: boolean);
}
