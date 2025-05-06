import { BaseEntity, Collection, EntitySchema } from '@mikro-orm/core';
import { Word } from './word.entity.js';
import { User } from './user.entity.js';

export interface Session extends BaseEntity {
    id: number,
    session_date: Date,
    user: User,
    words: Collection<Word>,
    failed_words: Collection<Word>,
}

export const session_schema = new EntitySchema<Session>({
    name: 'Session',
    properties: {
        id: { type: 'bigint', primary: true },
        session_date: { type: 'datetime', onCreate: () => new Date() },
        user: { kind: 'm:1', entity: 'User', inversedBy: 'sessions' },
        words: { kind: '1:m', entity: 'Word', mappedBy: 'used_in_session' },
        failed_words: { kind: '1:m', entity: 'Word', mappedBy: 'failed_in_session' },
    }
});