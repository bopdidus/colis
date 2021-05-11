import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";
import { Address } from "./Address";
import {IsNotEmpty,Length} from "class-validator";

@Entity()
export abstract class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        length:20
    })
    @Length(3,20)
    firstName: string;

    @Column({
        length:20,
        nullable:false
    })
    @Length(3,20)
    @IsNotEmpty({ message: 'The lastname is required' })
    lastName: string;

    @Column({
        nullable:false
    })
    @Index({
        unique:true
    })
    cni: number;
   
    @Column({
        nullable:false
    })
    nationality:string;

    @Column({
        nullable:false
    })
    @Length(6,15)
    phoneNumber:number

    @Column(type=>Address)
    address: Address
}
