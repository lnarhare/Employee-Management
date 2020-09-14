import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import EmployeeCreate from './employees/EmployeeCreate';
import EmployeeEdit from './employees/EmployeeEdit';
import EmployeeDelete from './employees/EmployeeDelete';
import EmployeeList from './employees/EmployeeList';
import EmployeeShow from './employees/EmployeeShow';
import Header from './Header';
import history from '../history';
import Calendar from './Calendar';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={EmployeeList} />
            <Route path="/employees/new" exact component={EmployeeCreate} />
            <Route path="/employees/edit/:id" exact component={EmployeeEdit} />
            <Route path="/employees/delete/:id" exact component={EmployeeDelete} />
            <Route path="/employees/:id" exact component={EmployeeShow} />
            <Route path="/Calender" component={Calendar}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
