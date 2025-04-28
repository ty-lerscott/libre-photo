import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../src/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', app.quit); 