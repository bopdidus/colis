import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";
import { User } from "./User";

@Entity()
export class Customer  extends User{

    @PrimaryGeneratedColumn("uuid")
    id: number;

}