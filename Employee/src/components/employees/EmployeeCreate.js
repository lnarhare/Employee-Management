import React from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createEmployee(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Employee</h3>
        <EmployeeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createEmployee }
)(EmployeeCreate);
