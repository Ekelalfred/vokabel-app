import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Word } from './word.entity.js';
import { User } from './user.entity.js';

@Entity()
export class Session {

    @PrimaryKey()
    id!: number;

    @Property()
    session_date = new Date();

    @ManyToOne(() => User)
    user!: User

    @OneToMany(() => Word, word => word.used_in_session)
    words = new Collection<Word>(this);

    @OneToMany(() => Word, word => word.failed_in_session, { nullable: true })
    failed_words = new Collection<Word>(this);

}