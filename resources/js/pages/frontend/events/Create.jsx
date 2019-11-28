import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import EventsRequests from '../../../requests/backend/EventsRequests';
import moment from 'moment';
import CharitiesRequests from '../../../requests/backend/CharitiesRequests';
import CausesRequests from '../../../requests/backend/CausesRequests';
import CitiesRequests from '../../../requests/backend/CitiesRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            form: {
                name: '',
                start_date: '',
                end_date: '',
                description: '',
                cause_id: '',
                charity_id: '',
                text: '',
                city_id: '',
                image: '',
                location: '',
                goal_item: '',
            },
            formData: {},
            messageError: '',
            charities: [],
            causes: [],
            cities: [],
        };
    }
    componentDidMount() {
        CharitiesRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({charities: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
        CausesRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({causes: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
        CitiesRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({cities: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    handleOnChange=event => {
        let {form}=this.state;
        form={...form,...{[event.target.name]: event.target.value}}
        this.setState({form})
        console.log(this.state)
    }

    onChangeFile=(e) => {
        e.preventDefault();

        let reader=new FileReader();
        let fileTmp=e.target.files[0];

        if(fileTmp) {
            reader.readAsDataURL(fileTmp);

            reader.onloadend=() => {
                let formData=new FormData();
                formData.append('image',fileTmp);
                console.log(formData)
                this.setState({formData})
            };
        }
    };

    submitForm=event => {
        event.preventDefault();
        let {formData,form}=this.state;
        formData.append('name',form.name);
        formData.append('description',form.description);
        formData.append('goal_item',form.goal_item);
        formData.append('location',form.location);
        formData.append('charity_id',form.charity_id);
        formData.append('city_id',form.city_id);
        formData.append('cause_id',form.cause_id);
        formData.append('text',form.text);
        formData.append('start_date',form.start_date);
        formData.append('end_date',form.end_date);

        EventsRequests.create(formData).then((response) => {
            if(response.meta.status===201) {
                console.log(response.data.id);
                if(response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.events.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.events.index.path);
                }
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    render() {
        let {charities,causes,cities}=this.state
        const formElement=(
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" id="image" name="image" onChange={this.onChangeFile} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description"
                        onChange={this.handleOnChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                <Link to={RouteConst.frontEnd.events.index.path}>
                    <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                </Link>
            </div>
        );

        return (
            <div>
                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Create event
        </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 text-center">
                                    <h1>1</h1>
                                    <a type="button" href="#">DESIGN YOUR DRIVE</a>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h1>2</h1>
                                    <a type="button" href="#">CHOOSE YOUR GOODS</a>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <h1>3</h1>
                                    <a type="button" href="#">FINISH YOUR DRIVE</a>
                                </div>
                                <hr className="style4">
                                </hr>

                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-2">
                                </div>
                                <div className="col-sm-8">
                                    <div className="panel">
                                        <div className="panel-body">
                                            <div className="col-sm-12">

                                                <div className="form-group col-sm-6">
                                                    <label htmlFor="description">Start date</label>
                                                    <input type="date" className="form-control" id="start_date"
                                                        name="start_date" onChange={this.handleOnChange} value={this.state.form.start_date} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label htmlFor="description">End date</label>
                                                    <input type="date" className="form-control" id="end_date"
                                                        name="end_date" onChange={this.handleOnChange} value={this.state.form.end_date} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-6">
                                                    <label htmlFor="description">Goal item</label>
                                                    <input type="text" className="form-control" id="goal_item"
                                                        name="goal_item" onChange={this.handleOnChange} value={this.state.form.goal_item} />
                                                </div>
                                                <div className="col-sm-6 ">
                                                    <div className="form-group">
                                                        <label htmlFor="description">Choose city</label>
                                                        <select name="city_id" id="city_id" className="form-control" required="required" onChange={this.handleOnChange} value={this.state.form.city_id}>
                                                            {
                                                                cities.map((item,key) => {
                                                                    return (
                                                                        <option key={key} value={item.id}>{item.name}</option>)
                                                                })
                                                            }

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">

                                                <div className="col-sm-12">
                                                    <label htmlFor="description">Title</label>
                                                    <input type="text" className="form-control" id="name"
                                                        name="name" onChange={this.handleOnChange} value={this.state.form.name} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <label htmlFor="description">Address Details</label>
                                                    <textarea className="form-control" id="location"
                                                        name="location" onChange={this.handleOnChange} value={this.state.form.location} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">

                                                <div className="col-sm-6 mg-10">
                                                    <div className="form-group">
                                                        <label htmlFor="description">Choose charity</label>
                                                        <select name="charity_id" id="charity_id" className="form-control" required="required"
                                                            onChange={this.handleOnChange} value={this.state.form.charity_id} >
                                                            {
                                                                charities.map((item,index) => {
                                                                    return (
                                                                        <option key={index} value={item.id}>{item.name}</option>
                                                                    )
                                                                })
                                                            }
                                                            <option value="">Another charity</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mg-10">
                                                    <div className="form-group">
                                                        <label htmlFor="description">Choose cause</label>
                                                        <select name="cause_id" id="cause_id" className="form-control" required="required"
                                                            onChange={this.handleOnChange} value={this.state.form.cause_id}>
                                                            {
                                                                causes.map((item,index) => {
                                                                    return (
                                                                        <option key={index} value={item.id}>{item.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="image">Image</label>
                                                        <input type="file" className="form-control" id="image" name="image" onChange={this.onChangeFile} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="description">Description</label>
                                                        <textarea type="textarea" className="form-control" id="description" name="description"
                                                            onChange={this.handleOnChange} value={this.state.form.description} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="description">Content</label>
                                                        <textarea type="textarea" className="form-control" id="text" name="text"
                                                            onChange={this.handleOnChange} value={this.state.form.text} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="col-sm-12">
                                                    <button type="button" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                                                    <Link to={RouteConst.frontEnd.home.index.path}>
                                                        <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                                                    </Link></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container text-center">

                        </div>
                        <div className="container mg-10">

                            <div className="container mg-10">

                            </div>
                            <div className="container">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
