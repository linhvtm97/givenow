import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import PostsRequests from '../../../requests/backend/PostsRequests';
import EventsRequests from '../../../requests/frontend/EventsRequests';
import LocalStorageHelper from '../../../helpers/LocalStorageHelper';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                description: '',
                title: '',
                event_id: '',
                image: '',
                text: '',
                status: 0
            },
            events: [],
            formData: new FormData(),
            messageError: '',
        };
    }
    componentDidMount() {
        EventsRequests.getAll().then((response) => {
            this.setState({events: response.data})
        });
    }

    handleOnChange = event => {
        let { form } = this.state;
        form = { ...form, ...{ [event.target.name]: event.target.value}}
        this.setState({ form })
    }

    onChangeFile = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let fileTmp = e.target.files[0];

        if (fileTmp) {
            reader.readAsDataURL(fileTmp);

            reader.onloadend = () => {
                let formData = new FormData();
                formData.append('image', fileTmp);
                console.log(formData)
                this.setState({ formData })
            };
        }
    };

    submitForm = event => {
        event.preventDefault();
        let { formData, form } = this.state;
        let user_id = LocalStorageHelper.getItem('authToken').user.id;

        formData.append('title', form.title);
        formData.append('status', form.status);
        formData.append('text', form.text);
        formData.append('event_id', parseInt(form.event_id));
        formData.append('description', form.description);
        formData.append('user_id', parseInt(user_id));


        PostsRequests.create(formData).then((response) => {
            if (response.meta.status === 201) {
                console.log(response.data.id);
                if (response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.posts.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.posts.index.path);
                }
            } else {
                this.state.messageError = response.meta.message;
            }
        });
    }

    render() {
        let {events} = this.state
        const breadcrumbElement = (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.posts.index.path}>Posts</Link>
                </li>
                <li className="breadcrumb-item active">Create</li>
            </ol>
        );

        const formElement = (
            <div>
             <div className="form-group">
                    <label htmlFor="description">Event</label>
                    <select name="event_id" id="event_id" className="form-control" required="required" onChange={this.handleOnChange} value={this.state.form.event_id}>
                        {
                            events.map((item,key) => {
                                return (
                                    <option key={key} value={item.id}>{item.name}</option>)
                            })
                        }

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input type="text" className="form-control" id="title"
                        name="title" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Status</label>
                    <select name="status" id="status" className="form-control" required="required" onChange={this.handleOnChange} value={this.state.form.status}>
                        <option value='0'>PUBLIC</option>)
                        <option value='1'>PRIVATE</option>)
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" id="image"
                        name="image" onChange={this.onChangeFile} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description"
                        name="description" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Text</label>
                    <input type="text" className="form-control" id="text"
                        name="text" onChange={this.handleOnChange} />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={this.submitForm}>Submit</button>
                <Link to={RouteConst.backEnd.posts.index.path}>
                    <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                </Link>
            </div>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Create post
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
