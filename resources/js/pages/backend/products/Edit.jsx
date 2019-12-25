import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import ProductsRequests from '../../../requests/backend/ProductsRequests';
import CategoriesRequests from '../../../requests/backend/CategoriesRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            info: {},
            form: {
                name: '',
                price: '',
                category_id: '',
                description: '',
            },
            formData: new FormData(),
            messageError: '',
            categories: []
        };
    }

    componentDidMount() {
        this.getInfo(this.state.id);
        CategoriesRequests.getAll().then((response) => {
            this.setState({categories: response.data});
        });
    }

    getInfo=(id) => {
        ProductsRequests.showByID(id).then((response) => {
            console.log(response)
            if(response.meta.status===200) {
                const form={
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    category_id: response.data.category_id,
                }
                this.setState({form});
            } else {
                this.props.history.push(RouteConst.backEnd.products.index.path);
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
            formData.append('price',form.price);
            formData.append('category_id',form.category_id);

            formSubmit=formData;
        } else {
            formSubmit=form;
        }

        console.log(formSubmit)
        ProductsRequests.update(this.state.id,formSubmit).then((response) => {
            if(response.meta.status===200) {
                if(response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.products.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.products.index.path);
                }
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    render() {
        let {categories}=this.state
        const breadcrumbElement=(
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.products.index.path}>Products</Link>
                </li>
                <li className="breadcrumb-item active">Edit</li>
            </ol>
        );

        const formElement=(
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={this.handleOnChange}
                        value={this.state.form.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" accept="image/*" id="image" name="image" onChange={this.onChangeFile} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Category</label>
                    <select name="category_id" id="category_id" className="form-control" required="required" onChange={this.handleOnChange}>
                        {
                            categories.map((category,index) => {
                                return (
                                    <option key={index} value={category.id}>{category.name}</option>
                                )
                            })
                        }

                    </select>

                </div>
                <div className="form-group">
                    <label htmlFor="description">Price</label>
                    <input type="text" className="form-control" id="price" name="price" onChange={this.handleOnChange}
                        value={this.state.form.price} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={this.handleOnChange}
                        value={this.state.form.description} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                <Link to={`${RouteConst.backEnd.products.index.path}/${this.state.id}`}> <button type="button"
                    className="btn btn-secondary ml-2">Cancel</button>
                </Link>
            </div>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Edit product
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
