var request = require("request");

var steam_key = C0AC6653C3EE3A2CEF15CF9D741D8517;
var steam_64id = 76561198109933231;

exports.steam = function() { // 不确定function里要不要

console.log("javascript in");

  var request_gamer_url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='+ steam_key + '&steamids=' + steam_64id;
  request(request_gamer_url, function(error, response, body){
    var output = JSON.parse(body);
    console.log(output);
  });
}
