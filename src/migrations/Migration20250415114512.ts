import { Migration } from '@mikro-orm/migrations';

export class Migration20250415114512 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`user\` (\`id\` integer not null primary key autoincrement, \`username\` text not null);`);

    this.addSql(`create table \`session\` (\`id\` integer not null primary key autoincrement, \`session_date\` datetime not null, \`user_id\` integer not null, constraint \`session_user_id_foreign\` foreign key(\`user_id\`) references \`user\`(\`id\`) on update cascade);`);
    this.addSql(`create index \`session_user_id_index\` on \`session\` (\`user_id\`);`);

    this.addSql(`create table \`word\` (\`id\` integer not null primary key autoincrement, \`meaning\` text not null, \`forms\` json not null, \`used_in_session_id\` integer not null, \`failed_in_session_id\` integer not null, constraint \`word_used_in_session_id_foreign\` foreign key(\`used_in_session_id\`) references \`session\`(\`id\`) on update cascade, constraint \`word_failed_in_session_id_foreign\` foreign key(\`failed_in_session_id\`) references \`session\`(\`id\`) on update cascade);`);
    this.addSql(`create index \`word_used_in_session_id_index\` on \`word\` (\`used_in_session_id\`);`);
    this.addSql(`create index \`word_failed_in_session_id_index\` on \`word\` (\`failed_in_session_id\`);`);

    this.addSql(`create table \`language\` (\`id\` integer not null primary key autoincrement, \`name\` text not null, \`words_id\` integer not null, constraint \`language_words_id_foreign\` foreign key(\`words_id\`) references \`word\`(\`id\`) on update cascade);`);
    this.addSql(`create index \`language_words_id_index\` on \`language\` (\`words_id\`);`);
  }

}
