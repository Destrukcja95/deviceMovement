function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function myInformation() {

	information =  'Hi, I am Kamil Roganowicz :-)' + '\n' +
			'=====' + '\n' +
			'My Name Kamil  ' + '\n' + 
			'My Last Name: Roganowicz ' + '\n';

	navigator.notification.alert(information);
	
}

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}
function onError() {
    alert('onError!');
}
var options = { frequency: 3000 };  // Update every 3 seconds
var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

