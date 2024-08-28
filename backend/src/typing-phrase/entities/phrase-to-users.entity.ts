import { Users } from 'src/users/entities/users.entity';
import { Column, Entity, ManyToOne,PrimaryGeneratedColumn} from 'typeorm';
import { Phrase } from './phrase.entity';

@Entity()
export class PhraseToUsers{
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    completed: boolean
    
    @ManyToOne(() => Users)
    user : Users

    @ManyToOne(() => Phrase)
    phrase: Phrase

    @Column()
    wpm: number
}