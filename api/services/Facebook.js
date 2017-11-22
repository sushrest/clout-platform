var queryString = require("querystring");
const request = require('request');
var graph = require('fbgraph');
var authUrl = "https://graph.facebook.com/oauth/authorize";
var accessTokenUrl = "https://graph.facebook.com/oauth/access_token";


var userAccess = [
  "public_profile",
  "email"
];


module.exports.authUrl = function () {
  var queryParams = {
    client_id: sails.config.socialNetworks.facebook.appId,
    scope: userAccess.join(","),
    display: "popup"
  };
  var query = queryString.stringify(queryParams);
  return authUrl + "?" + query;
};

module.exports.confirm = function (code, redirectUri, callback) {
  var queryParams = {
    client_id: sails.config.socialNetworks.facebook.appId,
    redirect_uri: redirectUri,
    client_secret: sails.config.socialNetworks.facebook.appSecret,
    code: code
  };
  var query = queryString.stringify(queryParams);

  var url = accessTokenUrl + "?" + query;

  return new Promise(function (resolve, reject) {
    request
      .get(url, function (e, r, body) {
        if (r && r.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          if (body) {
            reject(JSON.parse(body));
          } else {
            reject({message: "unknown error"})
          }

        }
      })
  });


};

module.exports.profile = function (token, callback) {
  return new Promise(function (resolve, reject) {
    graph.setAccessToken(token);

    graph.get("me?fields=id,name,email,picture.type(large)", function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res)
      }
    });
  });


};
