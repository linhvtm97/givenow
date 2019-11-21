import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import CitiesRequests from '../../../requests/backend/CitiesRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listCities: [],
            messageError: '',
        };
    }

    componentDidMount() {
        CitiesRequests.getAll().then((response) => {
            if (response.meta.status === 200) {
                this.setState({listCities: response.data});
            } else {
                this.state.messageError = response.meta.message;
            }
        });
    }

    render() {
        return (
            <div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Cities</li>
                </ol>

                <div className="card mb-3">
                    <div className="card-header">
                        <div className="float-left">
                            <p className="mb-0 mt-1">
                                <i className="fas fa-table"></i> List Cities
                            </p>
                        </div>
                        <div className="float-right">
                            <Link to={RouteConst.backEnd.cities.create.path}>
                                <button className="btn btn-success">Create</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Username</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.listCities.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.username}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone_number}</td>
                                                        <td>{item.address}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer small text-muted">
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item"><a className="page-link" href="">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="">1</a></li>
                            <li className="page-item"><a className="page-link" href="">2</a></li>
                            <li className="page-item"><a className="page-link" href="">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
