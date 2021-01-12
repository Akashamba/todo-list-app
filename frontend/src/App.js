import React from 'react';
import {Container} from '@material-ui/core';
import AddTask from './pages/add-task/add-task.component';
import ViewTasks from './pages/view-tasks/view-tasks.component.jsx';
import SettingsPage from './pages/settings-page/settings-page.component.jsx';
import Navbar from './components/navbar/navbar.component.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
// import SwipeableRoutes from "react-swipeable-routes"

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
                <Route exact path='/settings' component={SettingsPage} />
            </Switch>
        </Container>
    </div>
  );
}

export default App;
