/**
 * Created by Hernan Y.Ke on 2015/11/22.
 */
var request = require('request');
var url = 'http://ipinfo.io';
module.exports = function(){
    return new Promise(function(resolve,reject){
        request({
            url:url,
            json:true
        },function(err,response,body){
            if(err){
                reject();
            }else{
                resolve(body);
            }
        });
    });
}