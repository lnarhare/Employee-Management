import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
// import Calendar from './Calendar';
const Header = () => {
  
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Employee
      </Link>
      <Link to="/Calender" className="item">
        <i class="calendar alternate big outline icon"></i>
        Calendar
        </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All employees
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
