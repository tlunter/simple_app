/** @jsx React.DOM */
var Views = Views || {};
Views.CoolPage = React.createClass({
  handleClick: function(e) {
    e.preventDefault();

    Aviator.navigate('/');
  },
  render: function() {
    return (
      <div>
        <p>This cool page!</p>
        <p><a href="/" onClick={this.handleClick}>Home! No reload!</a></p>
        <p><a href="/">Home! With reload!</a> Notice the flicker.</p>
      </div>
    );
  }
});
