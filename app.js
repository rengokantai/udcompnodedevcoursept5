/**
 * Created by Hernan Y.Ke on 2015/11/22.
 */

var weather = require('./weather.js');
var location = require('./location.js');

var argv= require('yargs').option('location',{
    alias:'l',
    demand:false,
    describe:'location flag',
    type:'string'
}).help('help').argv;


if(typeof argv.l === 'string'&&argv.l.length>0) {
    //weather(argv.l, function (weather) {
    //    console.log(weather);
    //})
    weather(argv.l).then(function (weather) {
        console.log(weather);
    }).catch(function(err){
        console.log(err);
    });
}else{
        //location(function(location){
        //if(location){
        //    weather(location.city, function (weather) {
        //        console.log(weather);
        //    })
        //}else{
        //    console.log('Unable to get');
        //}
    location().then(function(loc){
        return weather(loc.city);
    }).then(function(weather){
        console.log(weather);
    }).catch(function(err){
        console.log(err);
    });
}

