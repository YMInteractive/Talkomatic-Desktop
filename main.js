const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#000000', // Matches the Talkomatic dark theme
    autoHideMenuBar: true,      // Keeps it clean and retro
    webPreferences: {
      nodeIntegration: false,   // Keeps it secure for remote content
      contextIsolation: true
    }
  });

  win.loadURL('https://classic.talkomatic.co');

  // Optional: Wait for the site to load before showing the window
  win.once('ready-to-show', () => {
    win.show();
  });
}

app.whenReady().then(createWindow);

// Standard Electron cleanup for Windows/Linux
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});