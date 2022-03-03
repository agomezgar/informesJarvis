const {app,BrowserWindow}=require('electron');
let mainWindow=null;
app.on('ready',()=>{
    console.log('hello from electron');
    mainWindow=new BrowserWindow(    
        {width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration:true
        }}
        );
        mainWindow.loadURL('index.html');
});