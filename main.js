const electron = require('electron')
const {app,BrowserWindow} = electron

app.on('ready', () =>
{
    let winForm = new BrowserWindow({width:800,height:600,autoHideMenuBar:true})
    winForm.loadURL('file://' + __dirname + '/index.html')
});

function btnClick()
{
        alert("hey!!");
}
