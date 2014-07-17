var AppRouteTargets = function() {};

AppRouteTargets.prototype = {
  'showSection': function (component) {
    React.unmountComponentAtNode(contentNode);
    React.renderComponent(component, contentNode);
  },
  'home': function (request, options) {
    this.showSection(Views.Home());
  },
  'cool_page': function (request, options) {
    this.showSection(Views.CoolPage());
  }
};
