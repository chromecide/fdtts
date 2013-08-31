
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['require'], function(require){
	var mixin = {
		//called when first mixing in the functionality
		init: function(cfg, callback){
			var self = this;
			if(callback){
			    callback(false, cfg);
			}
		},
		//called when something is published to this channel
		publish: function(topic, data){
			var self = this;

			switch(topic){
				case 'tts.say':
					require('child_process').exec('say '+data.get('text'));
					break;
			}
		}
	};
	
	return mixin;
});