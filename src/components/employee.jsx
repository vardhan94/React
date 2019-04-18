import React from "react";
import EmployeeName from "./employeename";
class Employee extends React.Component {
  render() {
    return (
      <div>
        <EmployeeName empname={this.props.emp.name} />
        <p>Employee City {this.props.emp.city}</p>
      </div>
    );
  }
}

export default Employee;
