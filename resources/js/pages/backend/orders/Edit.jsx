import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import OrdersRequests from '../../../requests/backend/OrdersRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            info: {},
            form: {
                status: '',
                event_id: '',
                user_id: '',
                total: ''
            },
            messageError: '',
        };
    }

    componentDidMount() {
        this.getInfo(this.state.id);
    }

    getInfo=(id) => {
        OrdersRequests.showByID(id).then((response) => {
            console.log(response)
            if(response.meta.status===200) {
                const form={
                    event_id: response.data.event_id,
                    user_id: response.data.user_id,
                    status: response.data.status,
                    total: response.data.products.length
                }
                this.setState({form});
            } else {
                this.props.history.push(RouteConst.backEnd.orders.index.path);
            }
        });
    }

    handleOnChange=event => {
        let {form}=this.state;
        form={...form,...{[event.target.name]: event.target.value}}
        this.setState({form})
    }

    submitForm=event => {
        event.preventDefault();
        let {form}=this.state;
        let formData=new FormData();
        formData.append('status',form.status)

        OrdersRequests.update(this.state.id,formData).then((response) => {
            if(response.meta.status===200) {
                if(response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.orders.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.orders.index.path);
                }
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    render() {
        const breadcrumbElement=(
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.orders.index.path}>Orders</Link>
                </li>
                <li className="breadcrumb-item active">Edit</li>
            </ol>
        );

        const formElement=(
            <div>
                <div className="form-group">
                    <label htmlFor="description">Status</label>
                    <select name="status" id="status" className="form-control" required="required" onChange={this.handleOnChange} value={this.state.form.status}>
                        <option value='0'>Processed</option>
                        <option value='1'>Processing</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Event</label>
                    <input type="text" className="form-control" id="event_id"
                        name="event_id" disabled value={this.state.form.event_id} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Created By User</label>
                    <input type="text" className="form-control" id="user_id"
                        name="user_id" disabled value={this.state.form.user_id} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Created By User</label>
                    <input type="text" className="form-control" id="total"
                        name="total" disabled value={this.state.form.total} />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={this.submitForm}>Submit</button>
                <Link to={`${RouteConst.backEnd.orders.index.path}/${this.state.id}`}>
                    <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                </Link>
            </div>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Edit order
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                {formElement}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
