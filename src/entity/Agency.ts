import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, Index} from "typeorm";
import { Address } from "./Address";
import { Employee } from "./Employee";

@Entity()
export class Agency {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        length:35
    })
    name:string;

    @Column(type=>Address)
    address: Address

    @OneToMany(type=>Employee, employee=>employee.agency)
    employees:Employee[]

}