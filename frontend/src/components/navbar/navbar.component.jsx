import {AppBar, Tabs, Tab} from '@material-ui/core';
import {withRouter ,Link} from 'react-router-dom';
import './navbar.styles.css';

function Navbar(props) {
    const {tab, setTab, history} = props;
    
    const handleClick = (tab) => {
        setTab(tab);

        switch(tab) {
            case 0: 
                history.push('/add-task');
                break;

            case 1: 
                props.history.push('/view-tasks');
                break;

            case 2: 
                props.history.push('/settings');
                break;

            default: 
                break;
        }
    }

    return(
        <AppBar position="static">
            <Link onClick={() => setTab(1)} id="navbar-brand" to='/view-tasks'>Todo List</Link>
            <Tabs value={tab}>
                <Tab id="tabs" onClick={() => handleClick(0)} label="Add Task"/>
                <Tab id="tabs" onClick={() => handleClick(1)} label="View Tasks"/>
                <Tab id="tabs" onClick={() => handleClick(2)} label="Settings"/>
            </Tabs>
        </AppBar>
    )
}

export default withRouter(Navbar);