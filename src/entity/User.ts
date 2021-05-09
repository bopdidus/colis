import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";
import { Address } from "./Address";

@Entity()
export abstract class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        length:20
    })
    firstName: string;

    @Column({
        length:20
    })
    lastName: string;

    @Column()
    @Index({
        unique:true
    })
    cni: number;
   
    @Column()
    nationality:string;

    @Column()
    phoneNumber:number

    @Column(type=>Address)
    address: Address
}
