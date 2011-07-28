define(["dojo/_base/html", // dojo.byId
        "dojo/_base/connect", // dojo.connect
        "dijit/_base/manager", // dijit.byId
        "dojox/mobile/TextBox",// not used in this module, but dependency of the demo template HTML
        "dojox/mobile/TextArea",
        "dojox/mobile/CheckBox",
        "dojox/mobile/RadioButton",
        "dojox/mobile/Slider"], function(html, connect, dijit) {
	return {
		init: function(){
			dijit.byId("alertSlider").focus = function(){};
			connect.connect(dijit.byId("resetBtn"), "onClick", function(){
				// roll back all form inputs
				html.byId("testForm").reset();
				dijit.byId("alertSwitch").set("value", "off");
				dijit.byId("alertSlider").set("value", 0);
				dijit.byId("alert-all").set("checked", false);
				dijit.byId("alert-urgent").set("checked", true);
			});
		}
	};
});
