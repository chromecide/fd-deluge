if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['child_process'], function(child_process){
    var mixin = {
        //called when first mixing in the functionality
        init: function(cfg, callback){
            var self = this;
            var errs = false;
            
            for(var key in cfg){
                self.set(key, cfg[key]);
            }

            var exec = child_process.exec;

            exec('deluge-console info',function (error, stdout, stderr) {
                console.log(stdout);
            });

            if(callback){
                callback(errs, self);
            }
        },
        //called when something is published to this channel
        publish: function(topic, data){
            
        }
    };
    
    return mixin;
});