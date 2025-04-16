const { contextBridge, ipcRenderer } = require('electron/renderer')

const databaseAPI = {
    postUser: (username) => ipcRenderer.send('api:post-user', username),
    getUsers: () => ipcRenderer.send('api:get-users'),
    postLanguage: (language) => ipcRenderer.send('api:post-language', language),
    getLanguages: () => ipcRenderer.send('api:get-languages'),
    postWord: (meaning, forms) => ipcRenderer.send('api:post-word', meaning, forms),
    putWord: (id, correction) => ipcRenderer.send('api:put-word', id, correction),
    getSessions: () => ipcRenderer.send('api:get-sessions'),
    getSession: (id) => ipcRenderer.send('api:get-session', id),
}
module.exports = { databaseAPI : databaseAPI }

contextBridge.exposeInMainWorld('databaseAPI', databaseAPI);