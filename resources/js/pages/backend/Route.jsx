import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';

import HomeIndex from './home/Index.jsx';
// Categories
import CategoriesIndex from './categories/Index.jsx';
import CategoriesCreate from './categories/Create.jsx';
import CategoriesShow from './categories/Show.jsx';
import CategoriesEdit from './categories/Edit.jsx';
// Cause
import CausesIndex from './causes/Index.jsx';
import CausesCreate from './causes/Create.jsx';
import CausesShow from './causes/Show.jsx';
import CausesEdit from './causes/Edit.jsx';
// Charities
import CitiesIndex from './cities/Index.jsx';
import CitiesCreate from './cities/Create.jsx';
import CitiesShow from './cities/Show.jsx';
import CitiesEdit from './cities/Edit.jsx';
// Events
import EventsIndex from './events/Index.jsx';
import EventsCreate from './events/Create.jsx';
import EventsShow from './events/Show.jsx';
import EventsEdit from './events/Edit.jsx';
// Products
import ProductsIndex from './products/Index.jsx';
import ProductsCreate from './products/Create.jsx';
import ProductsShow from './products/Show.jsx';
import ProductsEdit from './products/Edit.jsx';
// Users
import UsersIndex from './users/Index.jsx';
import UsersCreate from './users/Create.jsx';
import UsersShow from './users/Show.jsx';
import UsersEdit from './users/Edit.jsx';
// Orders
import OrdersIndex from './orders/Index.jsx';
import OrdersCreate from './orders/Create.jsx';
import OrdersShow from './orders/Show.jsx';
import OrdersEdit from './orders/Edit.jsx';
// Charities
import CharitiesIndex from './charities/Index.jsx';
import CharitiesCreate from './charities/Create.jsx';
import CharitiesShow from './charities/Show.jsx';
import CharitiesEdit from './charities/Edit.jsx';
// Posts
import PostsIndex from './posts/Index.jsx';
import PostsCreate from './posts/Create.jsx';
import PostsShow from './posts/Show.jsx';
import PostsEdit from './posts/Edit.jsx';
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
                <Route exact path={RouteConst.backEnd.categories.show.path} component={CategoriesShow} />
                <Route exact path={RouteConst.backEnd.categories.edit.path} component={CategoriesEdit} />

                <Route exact path={RouteConst.backEnd.causes.index.path} component={CausesIndex} />
                <Route exact path={RouteConst.backEnd.causes.create.path} component={CausesCreate} />
                <Route exact path={RouteConst.backEnd.causes.show.path} component={CausesShow} />
                <Route exact path={RouteConst.backEnd.causes.edit.path} component={CausesEdit} />

                <Route exact path={RouteConst.backEnd.cities.index.path} component={CitiesIndex} />
                <Route exact path={RouteConst.backEnd.cities.create.path} component={CitiesCreate} />
                <Route exact path={RouteConst.backEnd.cities.show.path} component={CitiesShow} />
                <Route exact path={RouteConst.backEnd.cities.edit.path} component={CitiesEdit} />
                
                <Route exact path={RouteConst.backEnd.events.index.path} component={EventsIndex} />
                <Route exact path={RouteConst.backEnd.events.create.path} component={EventsCreate} />
                <Route exact path={RouteConst.backEnd.events.show.path} component={EventsShow} />
                <Route exact path={RouteConst.backEnd.events.edit.path} component={EventsEdit} />
                
                <Route exact path={RouteConst.backEnd.products.index.path} component={ProductsIndex} />
                <Route exact path={RouteConst.backEnd.products.create.path} component={ProductsCreate} />
                <Route exact path={RouteConst.backEnd.products.show.path} component={ProductsShow} />
                <Route exact path={RouteConst.backEnd.products.edit.path} component={ProductsEdit} />
                
                <Route exact path={RouteConst.backEnd.users.index.path} component={UsersIndex} />
                <Route exact path={RouteConst.backEnd.users.create.path} component={UsersCreate} />
                <Route exact path={RouteConst.backEnd.users.show.path} component={UsersShow} />
                <Route exact path={RouteConst.backEnd.users.edit.path} component={UsersEdit} />

                <Route exact path={RouteConst.backEnd.orders.index.path} component={OrdersIndex} />
                <Route exact path={RouteConst.backEnd.orders.create.path} component={OrdersCreate} />
                <Route exact path={RouteConst.backEnd.orders.show.path} component={OrdersShow} />Orders
                <Route exact path={RouteConst.backEnd.orders.edit.path} component={OrdersEdit} />

                <Route exact path={RouteConst.backEnd.charities.index.path} component={CharitiesIndex} />
                <Route exact path={RouteConst.backEnd.charities.create.path} component={CharitiesCreate} />
                <Route exact path={RouteConst.backEnd.charities.show.path} component={CharitiesShow} />
                <Route exact path={RouteConst.backEnd.charities.edit.path} component={CharitiesEdit} />

                <Route exact path={RouteConst.backEnd.posts.index.path} component={PostsIndex} />
                <Route exact path={RouteConst.backEnd.posts.create.path} component={PostsCreate} />
                <Route exact path={RouteConst.backEnd.posts.show.path} component={PostsShow} />
                <Route exact path={RouteConst.backEnd.posts.edit.path} component={PostsEdit} />
                
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default withRouter(RouteBackEnd);