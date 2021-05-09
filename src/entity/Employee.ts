import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne} from "typeorm";
import { User } from "./User";
import { Agency } from "./Agency";

@Entity()
export class Employee  extends User{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        length:30
    })
    @Index({
        unique:true
    })
    email:string;

    @Column()
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