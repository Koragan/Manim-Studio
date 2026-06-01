const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const fs   = require('fs')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'Manim Studio',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Pick output directory
ipcMain.handle('pick-directory', async () => {
  const result = await dialog.showOpenDialog({ properties: ['openDirectory'] })
  return result.canceled ? null : result.filePaths[0]
})

// Open .py file
ipcMain.handle('open-file', async () => {
  const result = await dialog.showOpenDialog({
    filters: [{ name: 'Python Files', extensions: ['py'] }],
    properties: ['openFile']
  })
  if (result.canceled) return null
  const filePath = result.filePaths[0]
  const content  = fs.readFileSync(filePath, 'utf8')
  return { filePath, content }
})

// Save file
ipcMain.handle('save-file', async (e, { filePath, content }) => {
  if (filePath) {
    fs.writeFileSync(filePath, content, 'utf8')
    return filePath
  }
  const result = await dialog.showSaveDialog({
    defaultPath: 'scene.py',
    filters: [{ name: 'Python Files', extensions: ['py'] }]
  })
  if (result.canceled) return null
  fs.writeFileSync(result.filePath, content, 'utf8')
  return result.filePath
})
