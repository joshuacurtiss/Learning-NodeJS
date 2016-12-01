const electron = require("electron");
const {app, BrowserWindow} = electron;

app.on("ready", () => {
    let winA=new BrowserWindow({width:400, height:300});
    let winB=new BrowserWindow({width:400, height:250});
    winA.loadURL(`file://${__dirname}/pageA.html?msg=My great message for you!`);
    winB.loadURL(`file://${__dirname}/pageB.html?msg=This is also a great message!`);
});
