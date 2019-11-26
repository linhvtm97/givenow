import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import CharitiesRequests from '../../../requests/backend/CharitiesRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            form: {
                name: '',
                description: '',
                email: '',
                website: '',
                address: '',
                phone_number: '',
            },
            formData: {},
            messageError: '',
        };
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
        formData.append('email',form.email);
        formData.append('address',form.address);
        formData.append('website',form.website);
        formData.append('phone_number',form.phone_number);


        CharitiesRequests.create(formData).then((response) => {
            if(response.meta.status===201) {
                console.log(response.data.id);
                if(response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.charities.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.charities.index.path);
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
                    <Link to={RouteConst.backEnd.charities.index.path}>Charities</Link>
                </li>
                <li className="breadcrumb-item active">Create</li>
            </ol>
        );

        const formElement=(
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                        name="name" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" id="image"
                        name="image" onChange={this.onChangeFile} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Email</label>
                    <input type="text" className="form-control" id="email"
                        name="email" onChange={this.handleOnChange} value={this.state.form.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Website</label>
                    <input type="text" className="form-control" id="website"
                        name="website" onChange={this.handleOnChange} value={this.state.form.website} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Address</label>
                    <input type="text" className="form-control" id="address"
                        name="address" onChange={this.handleOnChange} value={this.state.form.address} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Phone Number</label>
                    <input type="text" className="form-control" id="phone_number"
                        name="phone_number" onChange={this.handleOnChange} value={this.state.form.phone_number} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description"
                        name="description" onChange={this.handleOnChange} />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={this.submitForm}>Submit</button>
                <Link to={RouteConst.backEnd.charities.index.path}>
                    <button type="button" className="btn btn-secondary ml-2">Cancel</button>
                </Link>
            </div>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Create charity
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
