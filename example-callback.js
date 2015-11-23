/**
 * Created by Hernan Y.Ke on 2015/11/22.
 */

var weather = require('./weather.js');

weather(function(cb){
    console.log(cb);
})

