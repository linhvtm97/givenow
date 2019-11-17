import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import HomeIndex from './home/Index.jsx';
import CategoriesIndex from './categories/Index.jsx';
import CategoriesCreate from './categories/Create.jsx';
import NotFound from './sites/NotFound';
import RouteConst from '../../constants/Route';

class RouteBackEnd extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={RouteConst.backEnd.home.index.path} component={HomeIndex} />
                <Route exact path={RouteConst.backEnd.categories.index.path} component={CategoriesIndex} />
                <Route exact path={RouteConst.backEnd.categories.create.path} component={CategoriesCreate} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default withRouter(RouteBackEnd);