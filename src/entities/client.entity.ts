import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Contacts } from "./contacts.entity";
@Entity()

export class Client {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    password: string

    @OneToMany(() => Contacts, contacts => contacts.client)
        contacts: Contacts[]

    @CreateDateColumn({ type: "date" })
    created_at: Date;

}