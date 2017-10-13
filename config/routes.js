const util = require('util');


var routes = [
  {method: "GET", path: "/activate", target: "SignUpController.activate"},
  {method: "POST", path: "/signup", target: "SignUpController.index"},
  {method: "POST", path: "/signin", target: "SignInController.index"},
  {method: "GET", path: "/facebook/url", target: "SocialController.facebookUrl"},
  {method: "GET", path: "/auth/facebook", target: "SocialController.facebookAuth"},
  {method: "GET", path: "/altcoins", target: "AltcoinController.index"},
  {method: "GET", path: "/altcoins/sync", target: "AltcoinController.sync"},
  {method: "GET", path: "/altcoins/history", target: "AltcoinController.history"}
];

var prefix = "/api/v1";

var routeObject = {};
for (var key in routes) {
  routeObject[util.format('%s %s%s', routes[key].method, prefix, routes[key].path)] = routes[key].target
}

module.exports.routes = routeObject;