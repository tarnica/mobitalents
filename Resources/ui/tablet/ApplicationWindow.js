//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var Theme = require('ui/mobi/Theme');
	var LoginView = require('ui/common/LoginView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor: Theme.backgroundColor,
		navBarHidden:true,
		exitOnClose:true
	});
		
	//construct UI
	var loginView = new LoginView();
	self.add(loginView);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
