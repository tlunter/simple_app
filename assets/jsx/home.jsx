/** @jsx React.DOM */
var Views = Views || {};
Views.Home = React.createClass({
  handleClick: function (e) {
    e.preventDefault();

    Aviator.navigate('/cool_page');
  },
  render: function() {
    return (
      <div>
        <p>Home page!</p>
        <p><button onClick={this.handleClick}>Cool page!</button></p>
      </div>
    );
  }
});
