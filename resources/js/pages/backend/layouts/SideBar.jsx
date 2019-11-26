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
            <div className="sidebar navbar-nav">

                <div href="#static-menu" data-toggle="collapse" aria-expanded="true" 
                    className="nav-item list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="menu-collapsed">Static menu</span>
                        <i className="fas fa-caret-down fa-fw mr-3"></i>
                    </div>
                </div>
                <div id='static-menu' className="collapse sidebar-submenu show">
                    {listStaticMenus.map((menu, i) => {
                        return (
                            <div className={`nav-item ${this.state.pathMenuCurrent === menu.link ? 'active' : '' }`} key={i}>
                                <Link to={menu.link} className="nav-link">
                                    <i className={menu.icon}></i> <span>{menu.label}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div href="#dynamic-menu" data-toggle="collapse" aria-expanded="true"
                    className="nav-item list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                        <span className="menu-collapsed">Dynamic menu</span>
                        <i className="fas fa-caret-down fa-fw mr-3"></i>
                    </div>
                </div>
                <div id='dynamic-menu' className="collapse sidebar-submenu show">
                {listDynamicMenus.map((menu, i) => {
                    return (
                        <div className={`nav-item ${this.state.pathMenuCurrent === menu.link ? 'active' : ''}`} key={i}>
                            <Link to={menu.link} className="nav-link">
                                <i className={menu.icon}></i> <span>{menu.label}</span>
                            </Link>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
}
