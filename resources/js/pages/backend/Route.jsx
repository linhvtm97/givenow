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
import CitiesIndex from './cities/Index.jsx';
import CitiesCreate from './cities/Create.jsx';
// Events
import EventsIndex from './events/Index.jsx';
import EventsCreate from './events/Create.jsx';
// Products
import ProductsIndex from './products/Index.jsx';
import ProductsCreate from './products/Create.jsx';
// Users
import UsersIndex from './users/Index.jsx';
import UsersCreate from './users/Create.jsx';
// Orders
import OrdersIndex from './orders/Index.jsx';
import OrdersCreate from './orders/Create.jsx';
// Charities
import CharitiesIndex from './charities/Index.jsx';
import CharitiesCreate from './charities/Create.jsx';
// Posts
import PostsIndex from './posts/Index.jsx';
import PostsCreate from './posts/Create.jsx';
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

                <Route exact path={RouteConst.backEnd.cities.index.path} component={CitiesIndex} />
                <Route exact path={RouteConst.backEnd.cities.create.path} component={CitiesCreate} />
                
                <Route exact path={RouteConst.backEnd.events.index.path} component={EventsIndex} />
                <Route exact path={RouteConst.backEnd.events.create.path} component={EventsCreate} />
                
                <Route exact path={RouteConst.backEnd.products.index.path} component={ProductsIndex} />
                <Route exact path={RouteConst.backEnd.products.create.path} component={ProductsCreate} />
                
                <Route exact path={RouteConst.backEnd.users.index.path} component={UsersIndex} />
                <Route exact path={RouteConst.backEnd.users.create.path} component={UsersCreate} />

                <Route exact path={RouteConst.backEnd.orders.index.path} component={OrdersIndex} />
                <Route exact path={RouteConst.backEnd.orders.create.path} component={OrdersCreate} />

                <Route exact path={RouteConst.backEnd.charities.index.path} component={CharitiesIndex} />
                <Route exact path={RouteConst.backEnd.charities.create.path} component={CharitiesCreate} />

                <Route exact path={RouteConst.backEnd.posts.index.path} component={PostsIndex} />
                <Route exact path={RouteConst.backEnd.posts.create.path} component={PostsCreate} />
                
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default withRouter(RouteBackEnd);