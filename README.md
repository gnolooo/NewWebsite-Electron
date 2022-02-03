# NewWebsite Electron
[FedericoLonghin](https://www.github.com/FedericoLonghin)'s [NewWebsite](https://github.com/FedericoLonghin/newWebsite) Electron App.

## Instructions
### Dependencies
* ```npm```
* * ```asar``` (optional; to install it: ```npm install asar``
* ```electron``` (optional; to install it: ```npm install -g electron```)

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
$ npm install -g electron
```
(To install ```electron```, ```npm``` is not the only option, even though it's the fastest way. Actually, some distros (e.g. Arch) have in their repositories Electron packages that you can install without relying on ```npm```).

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
