import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import EventsRequests from '../../../requests/backend/EventsRequests';
import CausesRequests from '../../../requests/backend/CausesRequests';
import CitiesRequests from '../../../requests/backend/CitiesRequests'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            info: {},
            form: {
                name: '',
                description: '',
                text: '',
                status: '',
                start_date: '',
                end_date: '',
                location: '',
                goal_item: '',
                cause_id: '',
                city_id: '',
                user_id: ''
            },
            formData: {},
            messageError: '',
            causes: [],
            cities: []
        };
    }

    componentDidMount() {
        this.getInfo(this.state.id);
        CausesRequests.getAll().then((response) => {
            this.setState({causes: response.data})
        });
        CitiesRequests.getAll().then((response) => {
            this.setState({cities: response.data})
        });
    }

    getInfo=(id) => {
        EventsRequests.showByID(id).then((response) => {
            console.log(response)
            if(response.meta.status===200) {
                const form={
                    name: response.data.name,
                    description: response.data.description,
                    start_date: response.data.start_date,
                    end_date: response.data.end_date,
                    location: response.data.location,
                    goal_item: response.data.goal_item,
                    status: response.data.status,
                    text: response.data.text,
                    cause_id: response.data.cause_id,
                    city_id: response.data.city_id,
                    user_id: response.data.user_id
                }
                this.setState({form});
            } else {
                this.props.history.push(RouteConst.backEnd.events.index.path);
            }
        });
    }

    handleOnChange=event => {
        let {form}=this.state;
        form={...form,...{[event.target.name]: event.target.value}}
        this.setState({form})
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
                this.setState({formData});
            };
        }
    };

    submitForm=event => {
        event.preventDefault();
        let {formData,form}=this.state;

        let formSubmit;

        if(formData instanceof FormData) {
            formData.append('name',form.name);
            formData.append('description',form.description);
            formData.append('start_date',form.start_date);
            formData.append('end_date',form.end_date);
            formData.append('location',form.location);
            formData.append('goal_item',form.goal_item);
            formData.append('status',form.status);
            formData.append('text',form.text);
            formData.append('cause_id',form.cause_id);
            formData.append('city_id',form.city_id);

            formSubmit=formData;
        } else {
            formSubmit=form;
        }


        EventsRequests.update(this.state.id,formSubmit).then((response) => {
            if(response.meta.status===200) {
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
        let {causes,cities}=this.state
        const breadcrumbElement=(
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.events.index.path}>Events</Link>
                </li>
                <li className="breadcrumb-item active">Edit</li>
            </ol>
        );

        const formElement=(
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                        name="name" onChange={this.handleOnChange} value={this.state.form.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Cause</label>
                    <select name="cause_id" id="cause_id" className="form-control" required="required" onChange={this.handleOnChange} value={this.state.form.cause_id}>
                        {
                            causes.map((item,key) => {
                                return (
                                    <option key={key} value={item.id}>{item.name}</option>)
                            })
                        }

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">City</label>
                    <select name="city_id" id="city_id" className="form-control" required="required" onChange={this.handleOnChange} value={this.state.form.city_id}>
                        {
                            cities.map((item,key) => {
                                return (
                                    <option key={key} value={item.id}>{item.name}</option>)
                            })
                        }

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" id="image"
                        name="image" onChange={this.onChangeFile} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Location</label>
                    <input type="text" className="form-control" id="location"
                        name="location" onChange={this.handleOnChange} value={this.state.form.location} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Goal Item</label>
                    <input type="text" className="form-control" id="goal_item"
                        name="goal_item" onChange={this.handleOnChange} value={this.state.form.goal_item} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Start date</label>
                    <input type="date" className="form-control" id="start_date"
                        name="start_date" onChange={this.handleOnChange} value={this.state.form.start_date} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">End date</label>
                    <input type="date" className="form-control" id="end_date"
                        name="end_date" onChange={this.handleOnChange} value={this.state.form.end_date} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description"
                        name="description" onChange={this.handleOnChange} value={this.state.form.description} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Content</label>
                    <input type="text" className="form-control" id="text"
                        name="text" onChange={this.handleOnChange} />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={this.submitForm}>Submit</button>
                <Link to={`${RouteConst.backEnd.events.index.path}/${this.state.id}`}>
                    <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                </Link>
            </div>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Edit event
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
