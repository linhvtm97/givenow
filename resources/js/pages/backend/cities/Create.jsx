import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import CitiesRequests from '../../../requests/backend/CitiesRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
            },
            messageError: '',
        };
    }

    handleOnChange = event => {
        let { form } = this.state;
        form = { ...form, ...{ [event.target.name]: event.target.value}}
        this.setState({ form })
    }

    submitForm = event => {
        event.preventDefault();

        CitiesRequests.create(this.state.form).then((response) => {
            if (response.meta.status === 201) {
                console.log(response.data.id);
                if (response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.cities.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.cities.index.path);
                }
            } else {
                this.state.messageError = response.meta.message;
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
                    <Link to={RouteConst.backEnd.cities.index.path}>Cities</Link>
                </li>
                <li className="breadcrumb-item active">Create</li>
            </ol>
        );

        const formElement = (
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                        name="name" onChange={this.handleOnChange} />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={this.submitForm}>Submit</button>
                <Link to={RouteConst.backEnd.cities.index.path}>
                    <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                </Link>
            </div>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Create city
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
