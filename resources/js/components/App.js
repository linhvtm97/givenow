import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';
import RouterPath from './RouterPath';

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                            <div className="container">
                                <a className="navbar-brand js-scroll-trigger" href="/">Give now</a>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/'}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/event'}>Live Event</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/charities'}>Charities</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/about'}>About us</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Checkout page
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div style={{ margin: '100px' }}><RouterPath/></div>
                </div>
            </HashRouter>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <App/>,
        document.getElementById('app'));
}

