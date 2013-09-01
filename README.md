fdtts
=====

TTS Mixins for FluxData

Currently only Macs with "say" are supported

Installation:

```javascript

npm install chromecide/FluxData
npm install chromecide/fdtts

```

Usage:

```javascript

var FluxData = require('FluxData');
var fdtts = require('fdtts');

var speakerChannel = new FluxData.Channel({
    mixins: [
        {
            type: fdtts.tts,
            voice: 'Alex', //optional, Alex is the default
            rate:   175 //optional, 175 is the default Word per Minute speech rate
        }
    ]
});

speakerChannel.publish('tts.say', {
   text: 'Hello World' 
});

```