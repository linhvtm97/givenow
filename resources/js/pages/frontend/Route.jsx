import React,{Component} from 'react';
import {Switch,withRouter,Route} from 'react-router-dom';

import HomeIndex from './home/Index.jsx';
// Events
import EventIndex from './events/Index.jsx';
import EventShow from './events/Show.jsx';
import EventCreate from './events/Create';
// Charities
import CharitiesIndex from './charities/Index.jsx';
// Authentication
import Login from './auth/Login';
import Register from './auth/Register';
// Carts
import CartPayment from './carts/Payment';
import CartShow from './carts/Show';
// Causes
import CausesShow from './causes/Show';
// Products
import ProductsIndex from './products/Index.jsx';
// About us
import AboutUs from './about/Index';
// Contact us
import ContactUs from './contact/Index';
// Others
import NotFound from './sites/NotFound';
import RouteConst from '../../constants/Route';

class RouteBackEnd extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={RouteConst.frontEnd.auth.login.path} component={Login} />
                <Route exact path={RouteConst.frontEnd.auth.register.path} component={Register} />

                <Route exact path={RouteConst.frontEnd.home.index.path} component={HomeIndex} />

                <Route exact path={RouteConst.frontEnd.events.index.path} component={EventIndex} />
                <Route exact path={RouteConst.frontEnd.events.show.path} component={EventShow} />
                <Route exact path={RouteConst.frontEnd.events.create.path} component={EventCreate} />

                <Route exact path={RouteConst.frontEnd.charities.index.path} component={CharitiesIndex} />
                <Route exact path={RouteConst.frontEnd.causes.show.path} component={CausesShow} />

                <Route exact path={RouteConst.frontEnd.cart.show.path} component={CartShow} />
                <Route exact path={RouteConst.frontEnd.cart.pay.path} component={CartPayment} />

                <Route exact path={RouteConst.frontEnd.aboutUs.path} component={AboutUs} />
                <Route exact path={RouteConst.frontEnd.contactUs.path} component={ContactUs} />

                <Route exact path={RouteConst.frontEnd.products.index.path} component={ProductsIndex} />

                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default withRouter(RouteBackEnd);
