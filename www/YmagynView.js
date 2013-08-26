cordova.define("org.cordova.ymagyn", function(require, exports, module) {
	function YmagynView()
	{
	}

	YmagynView.prototype.closeView = function()
	{
		cordova.exec(null, null, "Ymagyn", "closeView", []);
	}

	cordova.addConstructor(function() {
		if(!window.plugins)	{
			window.plugins = {};
		}
		window.plugins.ymagyn = new YmagynView();
	});
});
