var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

  getInitialState: function() {
    return {
      count: 0
    }
  },

  countUp() {
    this.state.count = this.state.count + 1;
    this.setState({
      count: this.state.count
    });
  },

  countDown() {
    this.setState({
    count: this.state.count - 1
   });
  },

  render: function() {
    return (
      <div>
        <ButtonController add={this.countUp} minus={this.countDown} count={this.state.count} />
      </div>
    );
  }
});

var ButtonController = React.createClass({
  render: function() {
    return (
      <div>
        <AddButton add={this.props.add} />
        <MinusButton minus={this.props.minus} />
        <CountLabel count={this.props.count} />
      </div>
    );
  }
});

var AddButton = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick={this.props.add}>Add button</button>
      </div>
    );
  }
});

var MinusButton = React.createClass({
  render: function() {
    return (
      <div>
        <button onClick = {this.props.minus}>Minus button</button>
      </div>
    );
  }
});

var CountLabel = React.createClass ({
  render: function() {
    return (
      <div>
        {this.props.count}
      </div>
    );
  }
})

module.exports = App
