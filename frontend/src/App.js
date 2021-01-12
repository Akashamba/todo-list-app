import React from 'react';
import {Container} from '@material-ui/core';
import AddTask from './pages/add-task/add-task.component';
import ViewTasks from './pages/view-tasks/view-tasks.component.jsx';
import Navbar from './components/navbar/navbar.component.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Navbar/>
        <Container>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/view-tasks'/>
                </Route>
                <Route exact path='/add-task' component={AddTask} />
                <Route exact path='/view-tasks' component={ViewTasks} />
            </Switch>
        </Container>
    </div>
  );
}

export default App;
