import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import EventsRequests from '../../../requests/backend/EventsRequests';
import moment from 'moment';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: 'Title',
            isClicked: false,
            startDate: new Date(),
            endDate: new Date(),
            form: {
                name: '',
                start_date: moment(),
                end_date: moment(),
                description: '',
            },
            formData: {},
            messageError: '',
        };
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
    setStartDate=(e) => {
        this.setState({
            startDate: e
        });
    };
    setEndDate=(e) => {
        this.setState({
            endDate: e
        });
    };
    onChange=event => {
        this.setState({
            title: event.value
        });
    }

    submitForm=event => {
        event.preventDefault();
        let {formData,form}=this.state;
        formData.append('name',form.name);
        formData.append('description',form.description);

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

    onClick=event => {
        this.setState({
            isClicked: !this.state.isClicked,
        });
    }

    render() {
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
                <Link to={RouteConst.backEnd.events.index.path}>
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
                                <div className="col-sm-12">
                                    <div className="col-sm-6 text-right">
                                        <DatePicker name="startDate" selected={this.state.startDate} minDate={moment.now()}
                                            onChange={this.setStartDate} dateFormat="MMMM d, yyyy" />
                                    </div>
                                    <div className="col-sm-1 text-center">
                                        <p>To</p>
                                    </div>
                                    <div className="col-sm-5 text-left">
                                        <DatePicker name="endDate" selected={this.state.endDate} minDate={this.state.startDate}
                                            onChange={this.setEndDate} dateFormat="MMMM d, yyyy" />
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-sm-12">
                    {formElement}
                </div> */}

                        </div>

                        <div className="container text-center">
                            {/* <label onClick={this.onClick}>{this.state.title}</label> */}
                            <input className="btn btn-light" type="button" onClick={this.onClick} id="title" name="title" value={this.state.title} />
                            <div className={this.state.isClicked? "":"hidden"}>
                                <input type="text" className="form-control-plaintext" id="title" name="title" value={this.state.title}
                                    onChange={this.onChange}></input>
                                <button onClick={this.onClick}>Done</button>
                            </div>
                            {/* <h2>Title</h2> */}
                            <h3>For <span>Charity name</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
