import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import CategoriesRequests from '../../../requests/backend/CategoriesRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            form: {
                name: '',
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

                this.setState({formData})
            };
        }
    };

    submitForm=event => {
        event.preventDefault();
        let {formData,form}=this.state;
        formData.append('name',form.name);
        formData.append('description',form.description);

        CategoriesRequests.create(formData).then((response) => {
            if(response.meta.status===201) {
                console.log(response.data.id);
                if(response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.categories.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.categories.index.path);
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
                    <Link to={RouteConst.backEnd.categories.index.path}>Categories</Link>
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
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Create category
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
