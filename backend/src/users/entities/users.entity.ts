import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, } from 'typeorm'; 
import * as bcrypt from 'bcrypt';
@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number 

    @Column({unique : true})
    nickname: string
    
    @Column()
    password: string

    @Column()
    admin: boolean

    async validatePassword(password: string): Promise<boolean> {
        return await bcrypt.compareSync(password, this.password);
    }

    @BeforeInsert()
    async hashPassword() {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }

    constructor(nickname: string, password: string, admin: boolean) {
        this.nickname = nickname;
        this.password = password;
        this.admin = admin;
    }
}

