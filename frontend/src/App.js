import React, {useState} from 'react';
import routes from './components/navbar/routes';
import AddTask from './pages/add-task/add-task.component';
import ViewTasks from './pages/view-tasks/view-tasks.component.jsx';
import SettingsPage from './pages/settings-page/settings-page.component.jsx';
import Navbar from './components/navbar/navbar.component.jsx';
import {Route, Redirect, withRouter} from 'react-router-dom';
import SwipeableRoutes from "react-swipeable-routes";
import {Helmet} from "react-helmet";

function App(props) {

    const {location} = props;
    const locationIndex = routes.indexOf(location.pathname);
    const [tab, setTab] = useState(locationIndex!==-1?locationIndex:1);

    return (
        <div className="App">
            <Helmet>
                {tab===0?<title>Add Task - Todo List App</title>:''}
                {tab===1?<title>View Tasks - Todo List App</title>:''}
                {tab===2?<title>Settings - Todo List App</title>:''}
            </Helmet>
            <Navbar tab={tab} setTab={setTab} />
            <Route exact path='/'>
                <Redirect to='/view-tasks'/>
            </Route>
                <SwipeableRoutes replace onChangeIndex={index => setTab(index)}>
                    <Route exact path='/add-task' component={AddTask} />
                    <Route exact path='/view-tasks' component={ViewTasks} />
                    <Route exact path='/settings' component={SettingsPage} />
                </SwipeableRoutes>
        </div>
    );
}

export default withRouter(App);
