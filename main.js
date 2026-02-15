const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        title: "Mini calendar",
        width: 214,
        height: 228,
        resizable: false,
        maximizable: false,
        frame: false,
        transparent: true,
        background: "#00000000",
        webPreferences: {
            contextIsolation: true
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !=="darwin") app.quit();
});