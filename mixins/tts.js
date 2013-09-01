
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['require'], function(require){
	var mixin = {
		//called when first mixing in the functionality
		init: function(cfg, callback){
			var self = this;

			for(var key in cfg){
				self.set(key, cfg[key]);
			}

			if(!self.get('voice')){
				self.set('voice', 'Alex');
			}

			if(!self.get('rate')){
				self.set('rate', 175);
			}

			if(callback){
				callback(false, cfg);
			}
		},
		//called when something is published to this channel
		publish: function(topic, data){
			var self = this;
			var voice = self.get('voice');
			var rate = self.get('rate');

			if(data.voice){
				voice = data.voice;
			}

			if(data.rate){
				rate = data.rate;
			}

			switch(topic){
				case 'tts.say':
					require('child_process').exec('say -v '+voice+' -r '+rate+' '+data.text);
					break;
			}
		}
	};
	
	return mixin;
});