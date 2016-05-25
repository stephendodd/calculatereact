var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div>
        hi
        <ButtonController />
      </div>
    );
  }
});

var ButtonController = React.createClass({
  render: function() {
    return (
      <div>
        <AddButton />
        <MinusButton />
      </div>
    );
  }
});

var AddButton = React.createClass({
  render: function() {
    return (
      <div>
        Hi addButton
      </div>
    );
  }
});

var MinusButton = React.createClass({
  render: function() {
    return (
      <div>
        Hi Minus
      </div>
    );
  }
});

module.exports = App
