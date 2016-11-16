const electron = require("electron");
const {app, BrowserWindow} = electron;

app.on("ready", () => {
    let win=new BrowserWindow({width:800, height:600});
    win.loadURL(`file://${__dirname}/index.html`);
    //win.setFullScreen(true);          // Example of setting app to run full-screen
    //win.webContents.openDevTools();   // Opening the dev tools
});

// Expose these commands to children window processes, so that the main process can handle them.

exports.openWindow=()=>{
    let win=new BrowserWindow({width:400,height:200});
    win.loadURL(`file://${__dirname}/bear.html`);
}

exports.quit=()=>{
    app.quit();
}