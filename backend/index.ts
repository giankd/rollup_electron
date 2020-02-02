import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWin;

app.on('ready', () => {
	mainWin = new BrowserWindow({
		height: 600,
		width: 800,
		webPreferences: {
			backgroundThrottling: false
		}
	});

	mainWin.loadURL(`file://${path.resolve('./frontend/public/index.html')}`);
});
