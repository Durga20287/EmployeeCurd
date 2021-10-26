import React, { Component } from "react";
import EmployeeSer from "../Services/EmployeeSer";
class ViewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }
  componentDidMount() {
    EmployeeSer.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }
 back(){
    this.props.history.push(`/employees`); 
 }
  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Employee First Name: </label>
              <div> {this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label> Employee Last Name: </label>
              <div> {this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label> Employee Email ID: </label>
              <div> {this.state.employee.emailId}</div>
            </div>
            <button style={{marginLeft: "10px"}} onClick={() => this.back()} className="btn btn-info">Back </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewEmployee;