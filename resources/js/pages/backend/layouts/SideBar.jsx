import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pathMenuCurrent: '',
        };
        this.getMenuCurrent();
    }

    componentDidMount() {
        this.getMenuCurrent();
    }


    componentWillReceiveProps() {
        this.getMenuCurrent();
    }

    getMenuCurrent() {
        const pathname = window.location.pathname
        const pathArray = pathname.split('/');
        const pathMenuCurrent = pathArray[0] + '/' + pathArray[1] + '/' + pathArray[2];
        this.setState({ pathMenuCurrent});
    }

    render() {
        const listMenus = [
            { icon: 'fas fa-folder', label: 'Categories', link: RouteConst.backEnd.categories.index.path },
            { icon: 'fas fa-folder', label: 'Causes', link: RouteConst.backEnd.causes.index.path },
            { icon: 'fas fa-folder', label: 'Charities', link: RouteConst.backEnd.charities.index.path },
            { icon: 'fas fa-folder', label: 'Events', link: RouteConst.backEnd.events.index.path },
            { icon: 'fas fa-folder', label: 'Items', link: RouteConst.backEnd.items.index.path },
        ];

        return (
            <ul className="sidebar navbar-nav">
                {listMenus.map((menu, i) => {
                    return (
                        <li className={`nav-item ${this.state.pathMenuCurrent === menu.link ? 'active' : '' }`} key={i}>
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
