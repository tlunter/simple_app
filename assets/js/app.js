var App = function() {};

App.prototype.start = function() {
  var targets = new AppRouteTargets();

  var routes = new Routes();
  routes.dispatch(targets);
};
