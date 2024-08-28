import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    
    id: number 

    @Column({unique : true})
    nickname: string
    
    @Column()
    password: string
}