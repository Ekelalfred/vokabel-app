import { BaseEntity, Collection, EntitySchema } from '@mikro-orm/core';
import { Word } from './word.entity.js';

export interface Language extends BaseEntity {
    id: number,
    name: string,
    words: Collection<Word>,
}

export const language_schema = new EntitySchema<Language>({
    name: 'Language',
    properties: {
        id: { type: 'bigint', primary: true },
        name: { type: 'string' },
        words: { kind: '1:m', entity: 'Word', mappedBy: 'language' },
    }
});