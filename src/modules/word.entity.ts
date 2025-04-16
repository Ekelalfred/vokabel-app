import { Entity, ManyToOne, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Language } from './language.entity.js';
import { Session } from './session.entity.js';

@Entity()
export class Word {

    @PrimaryKey()
    id!: number;

    @Property()
    meaning!: string;

    @OneToMany(() => Language, language => language.words)
    language!: Language;

    @Property({ type: 'json' })
    forms!: {}

    @ManyToOne(() => Session)
    used_in_session!: Session;
    
    @ManyToOne(() => Session)
    failed_in_session!: Session;
}