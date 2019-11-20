import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                image: '',
                description: '',
            },
        };
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = event => {
        event.preventDefault();
        console.log(this.state.formData)
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
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" 
                                            onChange={this.handleOnChange}/>
                                    </div>
                                    <button type="button" className="btn btn-primary" 
                                        onClick={this.submitForm}>Submit</button>
                                    <Link to={RouteConst.backEnd.categories.index.path}>
                                        <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
