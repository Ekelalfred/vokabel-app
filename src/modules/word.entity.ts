import { BaseEntity, Collection, EntitySchema, JsonType } from '@mikro-orm/core';
import { Language } from './language.entity.js';
import { Session } from './session.entity.js';
import { User } from './user.entity.js';

export interface Word extends BaseEntity {
    id: number,
    meaning: string,
    language: Language,
    forms: JsonType,
    used_in_session: Session,
    failed_in_session: Session,
    activated_by: Collection<User>
}

export const word_schema = new EntitySchema<Word>({
    name: 'Word',
    properties: {
        id: { type: 'bigint', primary: true },
        meaning: { type: 'string' },
        language: { kind: 'm:1', entity: 'Language', inversedBy: 'words' },
        forms: { type: 'json' },
        used_in_session: { kind: 'm:1', entity: 'Session', inversedBy: 'words' },
        failed_in_session: { kind: 'm:1', entity: 'Session', inversedBy: 'failed_words' },
        activated_by: { kind: 'm:n', entity: 'User', mappedBy: 'activated_words' }
    }
});