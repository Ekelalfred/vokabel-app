import { Migration } from '@mikro-orm/migrations';

export class Migration20250416203158 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`language\` (\`id\` integer not null primary key autoincrement, \`name\` text not null);`);

    this.addSql(`create table \`session\` (\`id\` integer not null primary key autoincrement, \`session_date\` datetime not null, \`user_id\` bigint not null, constraint \`session_user_id_foreign\` foreign key(\`user_id\`) references \`user\`(\`id\`) on update cascade);`);
    this.addSql(`create index \`session_user_id_index\` on \`session\` (\`user_id\`);`);

    this.addSql(`create table \`word\` (\`id\` integer not null primary key autoincrement, \`meaning\` text not null, \`language_id\` bigint not null, \`forms\` json not null, \`used_in_session_id\` bigint not null, \`failed_in_session_id\` bigint not null, constraint \`word_language_id_foreign\` foreign key(\`language_id\`) references \`language\`(\`id\`) on update cascade, constraint \`word_used_in_session_id_foreign\` foreign key(\`used_in_session_id\`) references \`session\`(\`id\`) on update cascade, constraint \`word_failed_in_session_id_foreign\` foreign key(\`failed_in_session_id\`) references \`session\`(\`id\`) on update cascade);`);
    this.addSql(`create index \`word_language_id_index\` on \`word\` (\`language_id\`);`);
    this.addSql(`create index \`word_used_in_session_id_index\` on \`word\` (\`used_in_session_id\`);`);
    this.addSql(`create index \`word_failed_in_session_id_index\` on \`word\` (\`failed_in_session_id\`);`);

    this.addSql(`create table \`user_activated_words\` (\`user_id\` bigint not null, \`word_id\` bigint not null, constraint \`user_activated_words_user_id_foreign\` foreign key(\`user_id\`) references \`user\`(\`id\`) on delete cascade on update cascade, constraint \`user_activated_words_word_id_foreign\` foreign key(\`word_id\`) references \`word\`(\`id\`) on delete cascade on update cascade, primary key (\`user_id\`, \`word_id\`));`);
    this.addSql(`create index \`user_activated_words_user_id_index\` on \`user_activated_words\` (\`user_id\`);`);
    this.addSql(`create index \`user_activated_words_word_id_index\` on \`user_activated_words\` (\`word_id\`);`);

    this.addSql(`alter table \`user\` rename column \`full_name\` to \`username\`;`);
  }

}
