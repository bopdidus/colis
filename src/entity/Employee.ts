import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne} from "typeorm";
import { User } from "./User";
import { Agency } from "./Agency";
import {IsEmail} from "class-validator";

@Entity()
export class Employee  extends User{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        length:30,
        nullable:false
    })
    @Index({
        unique:true
    })
    @IsEmail({}, { message: 'Incorrect email' })
    email:string;

    @Column({
        nullable:false
    })
    password:string;

    @Column()
    isActive:boolean;

    @Column({ 
        type: 'datetime' 
    })
    lastConnection:string;

    @ManyToOne(type=>Agency, agency=>agency.employees)
    agency:Agency
}