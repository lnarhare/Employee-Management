import React from 'react';
import { Field, reduxForm } from 'redux-form';

class EmployeeForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  renderSelect = ({
    input,
    label,
    meta: {touched, error},
    children
  }) => (
<div className="field">
<label className="label">{label}</label>
<div className="control">
<div className={
'select ' + (touched ? (error ? 'is-danger' : 'is-success') : '')
}>
<select {...input} >
{children}
</select>
{touched && (error && <p className="help is-danger">{error}</p>)}
</div>
</div>
</div>
);

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="firstname" component={this.renderInput} label="First Name" />
        <Field name="lastname" component={this.renderInput} label="Last Name" />
        <Field
          name="email"
          component={this.renderInput}
          label="Enter Email"
          type="email"
        />
        <Field name="gender" component={this.renderSelect} label="Gender:">
          <option></option>
          <option name="male">Male</option>
          <option name="female">Female</option>
        </Field>
        <Field name="Designation" component={this.renderSelect} label="Designation:">
          <option></option>
          <option name="Frontend Developer">Frontend Developer</option>
          <option name="Backend Developer">Backend Developer</option>
          <option name="Fullstack Developer">Fullstack Developer</option>
        </Field>
        <Field
          name="Number"
          component={this.renderInput}
          label="Enter Mobile Number"
          type="number"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.firstname) {
    errors.title = 'You must enter a firstname';
  }
  if (!formValues.lastname) {
    errors.title = 'You must enter a lastname';
  }

  if (!formValues.email) {
    errors.title = 'You must enter a email';
  }

  if (!formValues.Designation) {
    errors.title = 'You must select a Designation';
  }

  if (!formValues.sex) {
    errors.title = 'You must select a sex';
  }

  if (!formValues.Number) {
    errors.title = 'You must enter a  mobile Number';
  }



  return errors;
};

export default reduxForm({
  form: 'employeeForm',
  validate
})(EmployeeForm);
