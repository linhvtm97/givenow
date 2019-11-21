import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import CategoriesRequests from '../../../requests/backend/CategoriesRequests';
import Paginate from '../../components/Paginate.jsx';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listRecords: [],
            messageError: '',
            idDelete: '',
        };
    }

    componentDidMount() {
        this.getAllRecords();
    }

    getAllRecords = () => {
        CategoriesRequests.getAll().then((response) => {
            if (response.meta.status === 200) {
                this.setState({ listRecords: response.data });
            } else {
                this.state.messageError = response.meta.message;
            }
        });
    }

    deleteRecord = (event) => {
        event.preventDefault();
        CategoriesRequests.deleteByID(this.state.idDelete).then((response) => {
            this.getAllRecords();
        });
    }

    confirmDetele = (id) => (event) => {
        event.preventDefault();
        this.setState({ idDelete: id });
    }


    render() {
        const tableElement = (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.listRecords.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td className="text-center">
                                    <button className="btn btn-danger btn-sm"
                                        onClick={this.confirmDetele(item.id)} data-toggle="modal" data-target="#deleteModal">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );

        const paginateElement = (
            <Paginate pageCount="10" page="3" />
        );

        const modalDeleteElement = (
            <div className="modal fade show" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteRecord" aria-modal="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteRecord">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" onClick={this.deleteRecord} data-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );

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
                                    {tableElement}
                                </div>
                            </div>
                        </div>
                    </div>
                    {paginateElement}
                </div>
                {modalDeleteElement}
            </div>
        );
    }
}
