import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';

export default class extends Component {
    render() {
        const listMenus = [
            { icon: 'fas fa-folder', label: 'Categories', link: RouteConst.backEnd.categories.index.path },
        ];
        return (
            <ul className="sidebar navbar-nav">
                {listMenus.map((menu, i) => {
                    return (
                        <li className="nav-item" key={i}>
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
