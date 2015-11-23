/**
 * Created by Hernan Y.Ke on 2015/11/22.
 */

var weather = require('./weather.js');
var location = require('./location.js');

weather(function(weather){
    console.log(weather);
})
location(function(location){
    if(!location){
        console.log("no location");
        return;
    }
    console.log(location.city);
    console.log(location.loc);
})
