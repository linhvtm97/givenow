import React,{Component} from 'react';
import ProductsRequests from '../../../requests/backend/ProductsRequests';
import EventsRequests from '../../../requests/backend/EventsRequests';
import {connect} from 'react-redux';
import {addToCart,getCart} from '../../../redux/actions/cartActions';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: [],
            event: {},
            filter: '',
        }
    }

    componentDidMount() {
        this.props.getCart();
        ProductsRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({products: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });

        let {match}=this.props;
        let id=match.params.id

        EventsRequests.showByID(id).then((response) => {
            if(response.meta.status===200) {
                this.setState({event: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    handleOnChange=(e) => {
        let target=e.target;
        let name=target.name;
        let value=
            target.type==="checkbox"
                ? target.checked
                :target.value;
        this.setState({
            [name]: value
        });
    };

    orderProduct=(product) => (e) => {
        this.props.addToCart(product,e.target.value);
        this.props.getCart();
    }
    orderProduct=(product) => (e) => {
        this.props.addToCart(product,e.target.value);
        this.props.getCart();
    }

    getQuantity=(id) => {
        const {addedProducts}=this.props;

        for(let i=0;i<addedProducts.length;i++) {
            if(addedProducts[i].id===id) {
                return addedProducts[i].quantity;
            }
        }

        return 0;
    }

    render() {
        let {products,event,filter}=this.state;
        if(filter) {
            products=products.sort((a,b) => {
                if(filter==='0') {
                    return 0
                }
                if(filter==='1') {
                    if(a.updated_at>b.updated_at) return filter; else return -filter;
                }
                if(filter==='2') {
                    if(parseFloat(a.price)>parseFloat(b.price)) return filter; else return -filter;
                }
            })
        }
        return (
            <div>
                <div className="container">
                    <div className="col-sm-6 col-md-6 col-xs-6 col-lg-6">
                        <img src="/images/logo.jpg" alt="logo"></img>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xs-6 col-lg-6 text-right">
                        <h1>{event.name}</h1>
                        <h3>for the The New York Foundling</h3>
                        <h3><i>From {event.start_date} to {event.end_date}</i></h3>
                        <a className="btn btn-info" href={`/events/${event.id}`} role="button">View details</a>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    <div className=" col-sm-3 col-md-3 col-xs-3 col-lg-3 ">
                        <select name="filter" className="form-control" value={this.state.filter} onChange={this.handleOnChange}>
                            <option value="0">Sort all</option>
                            <option value="1">Common added</option>
                            <option value="2">Price</option>
                        </select>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    {
                        products.map((product,index) => {
                            product.quantity=this.getQuantity(product.id)
                            return (
                                <div className="container" key={index}>
                                    <div className=" col-sm-3 col-md-3 col-xs-3 col-lg-3">
                                        <div className="image-container mg-10">
                                            <img src={product.image} alt="product" className="image-thumbnail"></img>
                                        </div>
                                    </div>
                                    <div className=" col-sm-6 col-md-6 col-xs-6 col-lg-6 ">
                                        <h3>{product.name}</h3>
                                        <h4 className="text-left text-red">Price: {product.price}$</h4>
                                        <h4>{product.description}</h4>
                                    </div>
                                    <div className="col-sm-3 col-md-3 col-xs-3 col-lg-3">
                                        <div className="row">
                                            <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                                                <input type="number" min="0" className="form-control" value={product.quantity} required
                                                    onChange={this.orderProduct(product)} />
                                                <h3 className="text-right">{product.price*product.quantity}$</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}


const mapStateToProps=(state) => {
    return {
        addedProducts: state.cart.addedProducts
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
        getCart: () => {
            dispatch(getCart())
        },
        addToCart: (product,quantity) => {
            dispatch(addToCart(product,quantity))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
