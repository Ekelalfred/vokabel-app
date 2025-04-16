import { BaseEntity, Collection, EntitySchema } from '@mikro-orm/core';
import { Session } from './session.entity.js';
import { Word } from './word.entity.js';

export interface User extends BaseEntity {
    id: number,
    username: string,
    sessions: Collection<Session>,
    activated_words: Collection<Word>,
}

export const user_schema = new EntitySchema<User>({
    name: 'User',
    properties: {
        id: { type: 'bigint', primary: true },
        username: { type: 'string' },
        sessions: { kind: '1:m', entity: 'Session', mappedBy: 'user' },
        activated_words: { kind: 'm:n', entity: 'Word', inversedBy: 'activated_by' }
    }
});