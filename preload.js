const { contextBridge, ipcRenderer } = require('electron/renderer')

const databaseAPI = {
    postUser: (username) => ipcRenderer.send('api:post-user', username),
}
module.exports = { databaseAPI : databaseAPI }

contextBridge.exposeInMainWorld('databaseAPI', databaseAPI);