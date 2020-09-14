import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchEmployee, editEmployee } from '../../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchEmployee(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editEmployee(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.employee) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Employee</h3>
        <EmployeeForm
          initialValues={_.pick(this.props.employee, 'firstname', 'lastname','email','gender','Designation','Number')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { employee: state.employees[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchEmployee, editEmployee }
)(EmployeeEdit);
