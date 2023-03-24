import { Entity, Column, PrimaryColumn } from "typeorm";

// também importamos aqui o uuid
import { v4 as uuid } from "uuid"

@Entity()

export class Client {

    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    phone: number

    @Column()
    password: string

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}