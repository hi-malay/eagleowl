import React, { Component } from 'react';
import Login from "../Login/Login"
import Tabs from "../../components/common/Drawer/Tabs/Tabs"
import PrivateRoute from "../Router/PrivateRoute/index"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

class IndexRouter extends Component {
    render() {
        return (
            <div>
                <Router basename="/eagleowl">
                    <Switch>
                        <PrivateRoute path="/home" component={Tabs} />
                        <Route path="/" component={Login} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default IndexRouter;