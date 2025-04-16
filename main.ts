import { app, BrowserWindow, ipcMain, IpcMainEvent } from "electron";
import * as path from "node:path";
import * as fs from "fs";
import { MikroORM } from "@mikro-orm/sqlite";
import { User, user_schema } from "./src/modules/user.entity.js";
import { Language, language_schema } from "./src/modules/language.entity.js";
import { Word, word_schema } from "./src/modules/word.entity.js";
import { Session, session_schema } from "./src/modules/session.entity.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function postUser(_: IpcMainEvent, username: string) {
  const em = orm.em.fork();
  const user = em.create<User>('User', { username: username });
  em.persist(user);
  await em.flush();
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile("dist/electron-vokabel-app/browser/index.html");
};

app.whenReady().then(() => {
  ipcMain.on('api:post-user', postUser);
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

const orm = await MikroORM.init({
  dbName: "vokabel.db",
  entities: [user_schema, language_schema, word_schema, session_schema],
});