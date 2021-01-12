import React, {useState} from 'react';
import routes from './components/navbar/routes';
import AddTask from './pages/add-task/add-task.component';
import ViewTasks from './pages/view-tasks/view-tasks.component.jsx';
import SettingsPage from './pages/settings-page/settings-page.component.jsx';
import Navbar from './components/navbar/navbar.component.jsx';
import {Route, Redirect, withRouter} from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes"

function App(props) {

    const {location} = props;
    const locationIndex = routes.indexOf(location.pathname);
    const [tab, setTab] = useState(locationIndex!==-1?locationIndex:1);

    return (
        <div className="App">
            <Navbar tab={tab} setTab={setTab} />
            <Route exact path='/'>
                <Redirect to='/view-tasks'/>
            </Route>
                <SwipeableRoutes onChangeIndex={index => setTab(index)}>
                    <Route exact path='/add-task' component={AddTask} />
                    <Route exact path='/view-tasks' component={ViewTasks} />
                    <Route exact path='/settings' component={SettingsPage} />
                </SwipeableRoutes>
        </div>
    );
}

export default withRouter(App);
