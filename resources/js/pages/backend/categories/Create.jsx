import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import CategoriesRequests from '../../../requests/backend/CategoriesRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                image: '',
                description: '',
            },
            messageError: '',
        };
    }

    handleOnChange = event => {
        let { formData} = this.state;
        formData = { ...formData, ...{ [event.target.name]: event.target.value}}
        this.setState({ formData})
    }

    submitForm = event => {
        event.preventDefault();
        CategoriesRequests.create(this.state.formData).then((response) => {
            if (response.meta.status === 200) {
                console.log(response.data);
                this.props.history.push(Route.backEnd.categories.index.path);
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
                    <li className="breadcrumb-item">
                        <Link to={RouteConst.backEnd.categories.index.path}>Categories</Link>
                    </li>
                    <li className="breadcrumb-item active">Create</li>
                </ol>

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Create category
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"
                                            name="name" onChange={this.handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input type="text" className="form-control" id="image"
                                            name="image" onChange={this.handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input type="text" className="form-control" id="description"
                                            name="description" onChange={this.handleOnChange} />
                                    </div>
                                    <button type="button" className="btn btn-primary"
                                        onClick={this.submitForm}>Submit</button>
                                    <Link to={RouteConst.backEnd.categories.index.path}>
                                        <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
