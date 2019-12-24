import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import OrdersRequests from '../../../requests/backend/OrdersRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            listRecords: [],
            messageError: '',
            idDelete: '',
        };
    }

    componentDidMount() {
        this.getAllRecords();
    }

    getAllRecords=() => {
        OrdersRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                console.log(response);
                this.setState({listRecords: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    deleteRecord=(event) => {
        event.preventDefault();
        OrdersRequests.deleteByID(this.state.idDelete).then((response) => {
            this.getAllRecords();
        });
    }

    confirmDetele=(id) => (event) => {
        event.preventDefault();
        this.setState({idDelete: id});
    }


    render() {
        const tableElement=(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Event</th>
                        <th>Created By</th>
                        <th>Total</th>
                        <th className="text-center" width="150">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.listRecords.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td>{item.status==0? 'Processed':'Processing'}</td>
                                <td>{item.event.name}</td>
                                <td>{item.user.name}</td>
                                <td>{item.products.length}</td>
                                <td className="text-center">
                                    <Link className="btn btn-info btn-sm mr-2"
                                        to={`${RouteConst.backEnd.orders.index.path}/${item.id}`}>
                                        <i className="fas fa-eye"></i>
                                    </Link>
                                    <Link className="btn btn-warning btn-sm mr-2"
                                        to={`${RouteConst.backEnd.orders.index.path}/${item.id}/edit`}>
                                        <i className="fas fa-edit"></i>
                                    </Link>
                                    {/* <button className="btn btn-danger btn-sm"
                                        onClick={this.confirmDetele(item.id)} data-toggle="modal" data-target="#deleteModal">
                                        <i className="fas fa-trash"></i>
                                    </button> */}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );

        const modalDeleteElement=(
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

        const breadcrumbElement=(
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Orders</li>
            </ol>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <div className="float-left">
                            <p className="mb-0 mt-1">
                                <i className="fas fa-table"></i> List orders
                            </p>
                        </div>
                        <div className="float-right">
                            <Link to={RouteConst.backEnd.orders.create.path}>
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
                </div>
                {modalDeleteElement}
            </div>
        );
    }
}
