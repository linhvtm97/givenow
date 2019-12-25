import React,{Component} from 'react';
import ProductsRequests from '../../../requests/backend/ProductsRequests';
import EventsRequests from '../../../requests/backend/EventsRequests';
import {connect} from 'react-redux';
import {addToCart,getCart} from '../../../redux/actions/cartActions';
import LocalStorageHelper from "../../../helpers/LocalStorageHelper";
import RouteConst from '../../../constants/Route';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: [],
            event: {},
            filter: '',
            cartNotification: '',
            totalProducts: 0
        }
    }
    componentDidMount() {
        this.setState({
            cartNotification: LocalStorageHelper.getItem('addedProducts')!==null?
                LocalStorageHelper.getItem('addedProducts').length:0
        })
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

    onChangeCart=(e) => {
        this.setState({
            cartNotification: LocalStorageHelper.getItem('addedProducts')!==null?
                LocalStorageHelper.getItem('addedProducts').length:0
        })
    }

    handleOnChange=(e) => {
        this.setState({
            cartNotification: LocalStorageHelper.getItem('addedProducts')!==null?
                LocalStorageHelper.getItem('addedProducts').length:0
        })
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

    getQuantity=(id) => {
        const {addedProducts}=this.props;

        for(let i=0;i<addedProducts.length;i++) {if(addedProducts[i].id===id) {return addedProducts[i].quantity;} } return 0;
    }
    render() {
        let {products,event,filter}=this.state;
        let {cartNotification}=this.state
        const {addedProducts}=this.props;
        let total=0;
        for(let index=0;index<addedProducts.length;index++) {
            total+=addedProducts[index].price*addedProducts[index].quantity;
        }

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
                <hr>
                </hr>
                <div className="container">
                    <div className=" col-sm-3 col-md-3 col-xs-3 col-lg-3 ">
                        <select name="filter" className="form-control" value={this.state.filter} onChange={this.handleOnChange}>
                            <option value="0">Sort all</option>
                            <option value="1">Common added</option>
                            <option value="2">Price</option>
                        </select>
                    </div>
                    <div className="text-right">
                        <a href="/cart/payment" role="button" className="btn btn-primary hard-button" data-toggle="modal" href='#cart_modal'><i className="fa fa-shopping-cart"></i>Cart</a>
                        {/* <span className="badge badge-danger">{cartNotification}</span>*/}
                        <div className="modal fade" id="cart_modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                        <h4 className="modal-title text-left">Cart</h4>
                                    </div>
                                    <div className="modal-body">
                                        <ul className="list-group mb-3">
                                            {addedProducts&&addedProducts.map((item,index) => {
                                                return (
                                                    <li className="list-group-item d-flex justify-content-between lh-condensed text-left" key={index}>
                                                        <div>
                                                            <h6 className="my-0">{item.name} ({item.price}$)</h6>
                                                            <small className="text-muted">{item.description}</small>
                                                            <h6>Quantity: {item.quantity}</h6>
                                                        </div>
                                                        <span className="text-muted text-red">${item.price*item.quantity}</span>
                                                    </li>
                                                )
                                            })}
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Total ($) = </span>
                                                <strong className="text-danger">{total.toFixed(1)}</strong>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href={RouteConst.frontEnd.cart.show.path+"/event/"+event.id} role="button" className="btn btn-danger">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr>
                </hr>
                <div>
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
                                    <div className="col-sm-1 col-md-1 col-xs-1 col-lg-1">
                                    </div>
                                    <div className="col-sm-2 col-md-2 col-xs-2 col-lg-2">
                                        <input type="number" min="1" className="form-control" value={product.quantity} required
                                            onChange={this.orderProduct(product)} />
                                        <h3 className="text-right">{product.price*product.quantity}$</h3>
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
