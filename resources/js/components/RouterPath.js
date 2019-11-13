import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Event from "./pages/Event.js";
import Charity from "./pages/Charity"

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/event' component={Event}/>
                    <Route exact path='/charities' component={Charity}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath