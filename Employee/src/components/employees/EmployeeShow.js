import React from 'react';
// import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchEmployee } from '../../actions';

class EmployeeShow extends React.Component {


  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchEmployee(id);
    // this.buildPlayer();
  }

  // componentDidUpdate() {
  //   this.buildPlayer();
  // }

  // componentWillUnmount() {
  //   this.player.destroy();
  // }

  // buildPlayer() {
  //   if (this.player || !this.props.employee) {
  //     return;
  //   }

  //   const { id } = this.props.match.params;
  //   this.player = flv.createPlayer({
  //     type: 'flv',
  //     url: `http://localhost:8000/live/${id}.flv`
  //   });
  //   this.player.attachMediaElement(this.videoRef.current);
  //   this.player.load();
  // }

  render() {
    if (!this.props.employee) {
      return <div>Loading...</div>;
    }

    const { firstname, lastname,email,gender,Designation,Number } = this.props.employee;

    return (
      <div>
        <div className="ui list">
       <div className="header">{`Employee Name: ${firstname} ${lastname}`}</div>
       <div className="header">{`Email-Id: ${email}`}</div>
       <div className="header">{`Mobile Number: ${Number}`}</div>
       <div className="header">{`Gender: ${gender}`}</div>
       <div className="header">{`Designation: ${Designation}`}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { employee: state.employees[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchEmployee }
)(EmployeeShow);
