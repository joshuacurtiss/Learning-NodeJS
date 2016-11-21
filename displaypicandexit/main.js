const electron = require("electron");
const {app, BrowserWindow} = electron;
var electronEjs = require('electron-ejs');

function getArg(name)
{
    var args=process.argv;
    var i=1;
    while( i<args.length && args[i].toLowerCase().trim()!="--"+name.toLowerCase().trim() ) i+=1;
    if( i>=args.length ) return "";
    else return args[i+1];
}

var ejs = new electronEjs({
    msg:getArg("message"),
    img:getArg("img")
}, {});

app.on("ready", () => {
    var win=new BrowserWindow({width:800, height:480, title:"ElectronApp", show:false});
    win.on('ready-to-show', function() {
        win.show();
        win.focus();
        win.setFullScreen(true);
    });
    win.loadURL(`file://${__dirname}/index.ejs`);
    setTimeout(()=>{app.quit()},5000);
});
