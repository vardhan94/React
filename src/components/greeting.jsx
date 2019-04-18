import React from "react";
import PropTypes from "prop-types";
class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Name is {this.props.name}</h1>
        <h1>Age is {this.props.age}</h1>
      </div>
    );
  }
}

Greeting.defaultProps = {
  name: "Dafault Value",
  age: 30
};

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default Greeting;
