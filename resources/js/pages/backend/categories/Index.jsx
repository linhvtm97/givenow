import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';

export default class extends Component {
    render() {
        return (
            <div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Categories</li>
                </ol>

                <div className="card mb-3">
                    <div className="card-header">
                        <div className="float-left">
                            <p className="mb-0 mt-1">
                                <i className="fas fa-table"></i> List categories
                            </p>
                        </div>
                        <div className="float-right">
                            <Link to={RouteConst.backEnd.categories.create.path}>
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
                                                <th>#</th>
                                                <th>Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Doe</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Moe</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Dooley</td>
                                            </tr>
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
