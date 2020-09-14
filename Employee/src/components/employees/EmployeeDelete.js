import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchEmployee, deleteEmployee } from '../../actions';

class EmployeeDelete extends React.Component {
  componentDidMount() {
    this.props.fetchEmployee(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteEmployee(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.employee) {
      return 'Are you sure you want to delete this employee?';
    }

    return `Are you sure you want to delete the employee with title: ${
      this.props.employee.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Employee"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { employee: state.employees[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchEmployee, deleteEmployee }
)(EmployeeDelete);
