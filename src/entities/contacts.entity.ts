import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Client } from "./client.entity";

@Entity()

export class Contacts {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: string

    @ManyToOne(() => Client,
        { eager: true })
        client: Client

    @CreateDateColumn({ type: "date" })
    created_at: Date;
}