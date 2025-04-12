import { Migration } from '@mikro-orm/migrations';

export class Migration20250412133707 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`user\` (\`id\` integer not null primary key autoincrement, \`full_name\` text not null);`);
  }

}
