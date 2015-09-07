var app = require('app');
var ipc = require('ipc');

var BrowserWindow = require('browser-window');


app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width: 800,
    heigth: 600
  });
  mainWindow.loadUrl('file://'+ __dirname +'/views/index.html');
  //mainWindow.openDevTools();

var prefsWindow = new BrowserWindow({
    width:400,
    heigth: 400,
    show: false
});
prefsWindow.loadUrl('file://'+__dirname+'/views/prefs.html');
  ipc.on('show-prefs', function(){
    prefsWindow.show();
  });
});
