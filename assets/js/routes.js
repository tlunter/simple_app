var Routes = function() {};

Routes.prototype.dispatch = function(targets) {
  Aviator.setRoutes({
    target: targets,
    '/': 'home',
    '/cool_page': 'cool_page'
  });

  Aviator.dispatch();
};
