import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import OrdersRequests from '../../../requests/backend/OrdersRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            info: {}
        };
    }

    componentDidMount() {
        this.getInfo(this.state.id);
    }

    getInfo = (id) => {
        OrdersRequests.showByID(id).then((response) => {
            console.log(response)
            if (response.meta.status === 200) {
                this.setState({ info: response.data });
            } else {
                this.props.history.push(RouteConst.backEnd.orders.index.path);
            }
        });
    }

    render() {
        const breadcrumbElement = (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.orders.index.path}>Orders</Link>
                </li>
                <li className="breadcrumb-item active">Show</li>
            </ol>
        );

        const linkElement = (
            <div>
                <Link to={`${RouteConst.backEnd.orders.index.path}/${this.state.info.id}/edit`}
                    className="btn btn-primary">Edit</Link>
                <Link to={RouteConst.backEnd.orders.index.path}
                    className="btn btn-secondary ml-2">Go back</Link>
            </div>
        );

        const infoElement = (
            <div>
                <div className="row justify-content-md-center">
                    <div className="col-sm-12 col-md-8 show-info-container">
                        <div className="show-info">
                            <p className="show-label">ID</p>
                            <p className="show-value">{this.state.info.id}</p>
                        </div>
                        <div className="show-info">
                            <p className="show-label">Name</p>
                            <p className="show-value">{this.state.info.name}</p>
                        </div>
                        <div className="show-info">
                            <p className="show-label">Image</p>
                            <p className="show-value">
                                <img src={this.state.info.image} className="img-fluid"/>
                            </p>
                        </div>
                        <div className="show-info">
                            <p className="show-label">Description</p>
                            <p className="show-value">{this.state.info.description}</p>
                        </div>
                        <div className="show-info">
                            <p className="show-label">Created at</p>
                            <p className="show-value">{this.state.info.created_at}</p>
                        </div>
                        <div className="show-info">
                            <p className="show-label">Updated at</p>
                            <p className="show-value">{this.state.info.updated_at}</p>
                        </div>
                        {linkElement}
                    </div>
                </div>
            </div>
        )

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Info order
                    </div>
                    <div className="card-body">
                        {infoElement}
                    </div>
                </div>
            </div>
        );
    }
}
