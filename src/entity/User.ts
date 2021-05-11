import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";
import { Address } from "./Address";
import {IsNotEmpty,Min, Max} from "class-validator";

@Entity()
export abstract class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        length:20
    })
    @Min(3)
    @Max(20)
    firstName: string;

    @Column({
        length:20,
        nullable:false
    })
    @Min(3)
    @Max(20)
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
    @Min(5)
    @Max(20)
    phoneNumber:number

    @Column(type=>Address)
    address: Address
}
