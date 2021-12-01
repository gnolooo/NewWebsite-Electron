const {app, BrowserWindow} = require('electron');
let fedeWindow;

// handle create fedeWindow
function createFedeWindow(){
    fedeWindow = new BrowserWindow({
        height: 800,
        width: 1100,
        backgroundColor:'#ffffff',
        webPreferences: {
            nodeIntegration: false
          }});
    //load html into window
    fedeWindow.loadURL('https://federicolonghin.vercel.app/');
    //garbage collection handle
    fedeWindow.on('closed', function(){
        fedeWindow=null;
    });
}

app.on('ready',createFedeWindow)

app.on('windows-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
})
app.on('activate',function(){
    if(fedeWindow==null){
        createFedeWindow()
    }
})
