import React, { Component } from 'react';

import NavBar from './layouts/NavBar.jsx';
import Footer from './layouts/Footer.jsx';
import SideBar from './layouts/SideBar.jsx';
import Route from './Route.jsx';

export default class extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div id="wrapper">
                    <SideBar />
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <Route />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}