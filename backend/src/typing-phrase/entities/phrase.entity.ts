import { Users } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { PhraseToUsers } from './phrase-to-users.entity';

@Entity()
export class Phrase{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    phrase: string

    @ManyToOne(() => Users, (Users) => Users.id)
    createdBy: Users
}