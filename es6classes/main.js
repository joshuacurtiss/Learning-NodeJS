const electron = require("electron");
const {app, BrowserWindow} = electron;

app.on("ready", () => {
    let win=new BrowserWindow({width:1000, height:700});
    win.loadURL(`file://${__dirname}/index.html`);
    //win.setFullScreen(true);          // Example of setting app to run full-screen
    win.webContents.openDevTools();   // Opening the dev tools
});
