import { Options, SqliteDriver } from '@mikro-orm/sqlite';
import { Migrator } from "@mikro-orm/migrations";

const config: Options = {
  // for simplicity, we use the SQLite database, as it's available pretty much everywhere
  driver: SqliteDriver,
  dbName: 'vokabel.db',
  // folder-based discovery setup, using common filename suffix
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  // we will use the ts-morph reflection, an alternative to the default reflect-metadata provider
  // check the documentation for their differences: https://mikro-orm.io/docs/metadata-providers
  // enable debug mode to log SQL queries and discovery information
  debug: true,
  extensions: [Migrator]
};

export default config;