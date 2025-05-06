import { BaseEntity, Collection, EntitySchema } from '@mikro-orm/core';
import { Word } from './word.entity.js';
import { User } from './user.entity.js';

export interface Language extends BaseEntity {
    id: number,
    name: string,
    words: Collection<Word>,
    activated_by_users?: Collection<User>,
}

export const language_schema = new EntitySchema<Language>({
    name: 'Language',
    properties: {
        id: { type: 'bigint', primary: true },
        name: { type: 'string' },
        words: { kind: '1:m', entity: 'Word', mappedBy: 'language' },
        activated_by_users: { kind: '1:m', entity: 'User', mappedBy: 'activated_language', nullable: true },
    }
});