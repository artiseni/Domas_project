import {
    Entity, Column, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn, BeforeInsert
} from "typeorm"

import { v4 as uuid } from 'uuid'


@Entity()
export class Model {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    uuid: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeInsert()
    createUuid = () => {
        this.uuid = uuid()
    }

}