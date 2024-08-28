import { Users } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Phrase{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    phrase: string

    @ManyToOne(() => Users, (Users) => Users.id)
    createdBy: Users
}