import React from "react";
class EmployeeName extends React.Component {
  render() {
    return (
      <div>
        <p>EmployeeName {this.props.empname}</p>
      </div>
    );
  }
}

export default EmployeeName;
