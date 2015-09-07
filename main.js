var remote = require('remote');
var ipc = require('ipc');
var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([{
  label:'Chat',
  submenu: [
      {
        label:'Prefs',
        Click:function(){
          ipc.send('show-prefs');
        }
      }
  ]
}]);
Menu.setApplicationMenu(menu);
