import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEmployees } from '../../actions';

class EmployeeList extends React.Component {

  componentDidMount() {
    this.props.fetchEmployees();
  }

  renderAdmin(employee) {
    if (employee.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/employees/edit/${employee.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/employees/delete/${employee.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return (
        <div>
        <table class="ui celled table">
        <thead>
        <tr><th>Name</th>
        <th>Designation</th>
        <th>Edit/Delete</th>
      </tr></thead>
      <tbody>
     {this.props.employees.map(employee => {
      return (
        <tr key={employee.id}>
          <td><Link to={`/employees/${employee.id}`} className="header">
             {`${employee.firstname}  ${employee.lastname}`}
            </Link></td>
          <td>{employee.Designation}</td>
          <td>{this.renderAdmin(employee)}</td>
        </tr>
       );
      })
      }
     </tbody>
    </table>
    </div>
    );
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/employees/new" className="ui button primary">
            Create Employee
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>       
        <h2>Employees</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: Object.values(state.employees),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);
