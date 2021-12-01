# NewWebsite Electron
[FedericoLonghin](https://www.github.com/FedericoLonghin)'s [NewWebsite](https://github.com/FedericoLonghin/newWebsite) Electron App.

## Instructions
### Dependencies
* ```npm```
* ```electron``` (optional)
* ```asar``` (optional; to install it: ```npm install asar```)
### Start application from command-line
Git clone the repository and start the application inside it.
```
$ git clone https://github.com/gnolooo/NewWebsite-Electron/
$ cd NewWebsite-Electron
$ npm start
```
### Create app.asar file
Install optional dependencies ```electron``` and ```asar```.
```
$ npm install asar
```
(To install ```electron```, search instrucions for your specific distribution).

Now pack the application in an app.asar file and open it with Electron:
```
$ asar pack NewWebsite-Electron app.asar
$ electron app.asar
```
If you want, you can create a .desktop file that points to the ```app.asar``` file you just created. Here you have an example:
```
[Desktop Entry]
Name=NewWebsite
Exec=electron your-home-directory/app.asar
Terminal=false
Icon=your-custom-icon-(optional)
Type=Application
```
