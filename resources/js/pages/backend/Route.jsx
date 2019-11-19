import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import HomeIndex from './home/Index.jsx';
// Categories
import CategoriesIndex from './categories/Index.jsx';
import CategoriesCreate from './categories/Create.jsx';
// Cause
import CausesIndex from './causes/Index.jsx';
import CausesCreate from './causes/Create.jsx';
// Charities
import CharitiesIndex from './charities/Index.jsx';
import CharitiesCreate from './charities/Create.jsx';
// Events
import EventsIndex from './events/Index.jsx';
import EventsCreate from './events/Create.jsx';
// Items
import ItemsIndex from './items/Index.jsx';
import ItemsCreate from './items/Create.jsx';
// Others
import NotFound from './sites/NotFound';
import RouteConst from '../../constants/Route';

class RouteBackEnd extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={RouteConst.backEnd.home.index.path} component={HomeIndex} />
                
                <Route exact path={RouteConst.backEnd.categories.index.path} component={CategoriesIndex} />
                <Route exact path={RouteConst.backEnd.categories.create.path} component={CategoriesCreate} />

                <Route exact path={RouteConst.backEnd.causes.index.path} component={CausesIndex} />
                <Route exact path={RouteConst.backEnd.causes.create.path} component={CausesCreate} />

                <Route exact path={RouteConst.backEnd.charities.index.path} component={CharitiesIndex} />
                <Route exact path={RouteConst.backEnd.charities.create.path} component={CharitiesCreate} />
                
                <Route exact path={RouteConst.backEnd.events.index.path} component={EventsIndex} />
                <Route exact path={RouteConst.backEnd.events.create.path} component={EventsCreate} />
                
                <Route exact path={RouteConst.backEnd.items.index.path} component={ItemsIndex} />
                <Route exact path={RouteConst.backEnd.items.create.path} component={ItemsCreate} />
                
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default withRouter(RouteBackEnd);