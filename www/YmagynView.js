//cordova.define("org.cordova.ymagyn", function(require, exports, module) {
	function YmagynView()
	{
	}

	YmagynView.prototype.closeView = function()
	{
		cordova.exec(null, null, "Ymagyn", "closeView", []);
	}

	YmagynView.prototype.hideStatusBar = function() {
		cordova.exec(null, null, "Ymagyn", "hideStatusBar", []);
	}

	cordova.addConstructor(function() {
		if(!window.plugins)	{
			window.plugins = {};
		}
		window.plugins.ymagyn = new YmagynView();
	});
//});
