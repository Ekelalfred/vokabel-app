import { Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Session } from './session.entity';

@Entity()
export class User {

   @PrimaryKey()
   id!: number;

   @Property()
   username!: string;

   @OneToMany(() => Session, session => session.user)
   sessions = new Collection<Session>(this);
}