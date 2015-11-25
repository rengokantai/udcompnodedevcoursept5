/**
 * Created by Hernan Y.Ke on 2015/11/22.
 */
var request = require('request');
module.exports = function(location, callback){

    var encodedLocation = encodeURIComponent(location);

    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation +'&appid=2de143494c0b295cca9337e1e96b00e0';
    if(!location){
        return callback("No location");
    }
    request({
        url:url,
        json:true
    },function(err,response,body){
        if(err){
            callback('unable to get');
        }else{
            callback(body.main.temp+" "+body.name);
        }
    });
}