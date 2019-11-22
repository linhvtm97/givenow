import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pathMenuCurrent: '',
        };
    }

    componentDidMount() {
        this.getMenuCurrent();
    }


    componentWillReceiveProps() {
        this.getMenuCurrent();
    }

    getMenuCurrent = () => {
        const pathname = window.location.pathname
        const pathArray = pathname.split('/');
        const pathMenuCurrent = pathArray[0] + '/' + pathArray[1] + '/' + pathArray[2];
        this.setState({ pathMenuCurrent});
    }

    render() {
        const listStaticMenus = [
            { icon: 'fas fa-folder', label: 'Cities', link: RouteConst.backEnd.cities.index.path },
            { icon: 'fas fa-folder', label: 'Categories', link: RouteConst.backEnd.categories.index.path },
            { icon: 'fas fa-folder', label: 'Causes', link: RouteConst.backEnd.causes.index.path },
            { icon: 'fas fa-folder', label: 'Charities', link: RouteConst.backEnd.charities.index.path },
        ];

        const listDynamicMenus = [
            { icon: 'fas fa-folder', label: 'Users', link: RouteConst.backEnd.users.index.path },
            { icon: 'fas fa-folder', label: 'Events', link: RouteConst.backEnd.events.index.path },
            { icon: 'fas fa-folder', label: 'Products', link: RouteConst.backEnd.products.index.path },
            { icon: 'fas fa-folder', label: 'Orders', link: RouteConst.backEnd.orders.index.path },
            { icon: 'fas fa-folder', label: 'Posts', link: RouteConst.backEnd.posts.index.path },
        ];

        return (
            <ul className="sidebar navbar-nav">
                <li className="nav-item">
                    <a className="nav-link">Static menu</a>
                </li>
                {listStaticMenus.map((menu, i) => {
                    return (
                        <li className={`nav-item ${this.state.pathMenuCurrent === menu.link ? 'active' : '' }`} key={i}>
                            <Link to={menu.link} className="nav-link">
                                <i className={menu.icon}></i> <span>{menu.label}</span>
                            </Link>
                        </li>
                    )
                })}
                <li className="nav-item">
                    <a className="nav-link">Dynamic menu</a>
                </li>
                {listDynamicMenus.map((menu, i) => {
                    return (
                        <li className={`nav-item ${this.state.pathMenuCurrent === menu.link ? 'active' : ''}`} key={i}>
                            <Link to={menu.link} className="nav-link">
                                <i className={menu.icon}></i> <span>{menu.label}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        );
    }
}
