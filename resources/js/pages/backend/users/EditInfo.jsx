import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import UsersRequests from '../../../requests/backend/UsersRequests';
import LocalStorageHelper from '../../../helpers/LocalStorageHelper';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: LocalStorageHelper.getItem('authToken').user.id,
            info: {},
            form: {
                name: '',
                username: '',
                email: '',
                image: '',
                phone_number: '',
                description: '',
                address: '',
            },
            formData: new FormData(),
            messageError: '',
        };
    }

    componentDidMount() {
        this.getInfo(this.state.id);
    }

    getInfo=(id) => {
        UsersRequests.showByID(id).then((response) => {
            console.log(response)
            if(response.meta.status===200) {
                const form={
                    name: response.data.name,
                    email: response.data.email,
                    image: response.data.image,
                    username: response.data.username,
                    address: response.data.address,
                    phone_number: response.data.phone_number,
                    description: response.data.description,
                }
                this.setState({form});
            } else {
                this.props.history.push(RouteConst.backEnd.users.editInfo.path);
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
            formData.append('email',form.email);
            formData.append('address',form.address);
            formData.append('phone_number',form.phone_number);
            formData.append('description',form.description);

            formSubmit=formData;
        } else {
            formSubmit=form;
        }

        UsersRequests.update(this.state.id,formSubmit).then((response) => {
            if(response.meta.status===200) {
                if(response.data.id) {
                    alert('Submit successfully!')
                    window.location.href=RouteConst.backEnd.users.editInfo.path;
                } else {
                    this.props.history.push(RouteConst.backEnd.home.index.path);
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
                <li className="breadcrumb-item active">Information</li>
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
                    <label htmlFor="name">Phone number</label>
                    <input type="text" className="form-control" id="name"
                        name="phone_number" onChange={this.handleOnChange} value={this.state.form.phone_number} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Address</label>
                    <input type="text" className="form-control" id="name"
                        name="address" onChange={this.handleOnChange} value={this.state.form.address} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input type="text" className="form-control" id="name" disabled
                        name="username" onChange={this.handleOnChange} value={this.state.form.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <p className="show-value">
                                <img src={this.state.form.image} className="img-fluid"/>
                    </p>
                    <input type="file" className="form-control" id="image" accept="image/*"
                        name="image" onChange={this.onChangeFile} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description"
                        name="description" onChange={this.handleOnChange} value={this.state.form.description} />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={this.submitForm}>Submit</button>
            </div>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Edit Information
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
