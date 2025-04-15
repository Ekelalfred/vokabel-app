import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Word } from './word.entity';

@Entity()
export class Language {

    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @ManyToOne(() => Word)
    words!: Word;
}