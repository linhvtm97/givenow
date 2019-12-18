import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getCart,resetCart} from '../../../redux/actions/cartActions';
import {removeItem} from '../../../redux/actions/cartActions';
import LocalStorageHelper from '../../../helpers/LocalStorageHelper';
import Login from '../../frontend/auth/Login';
import RouteConst from '../../../constants/Route';


class PaymentPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            errors: [],
            user: []
        }
    }

    componentDidMount() {
        this.props.getCart();
        this.setState({user: LocalStorageHelper.getItem('authToken').user});
    }

    onRemoveItem=(product) => (e) => {
        this.props.removeItem(product);
        window.location.href=RouteConst.frontEnd.cart.pay.path;
    }
    onSubmit=event => {
        event.preventDefault();
        setTimeout(() => {
            this.props.resetCart();
            window.location.href=RouteConst.frontEnd.home.index.path;
        },1000);

    };

    render() {

        const {addedProducts}=this.props;
        let {user}=this.state;
        let total=0;
        for(let index=0;index<addedProducts.length;index++) {
            total+=addedProducts[index].price*addedProducts[index].quantity;
        }

        return (
            <div>
                <hr className="style4">
                </hr>
                <div className="container text-center">
                    <div className="caption bg-blue">
                        <h2 className="text-white">Checkout form</h2>
                    </div>
                    <hr className="style4">
                    </hr>
                </div>
                <div className="container mg-10">
                    {/* <div className="text-left">
                        <button className="btn btn-primary" >
                            <span><i class="fa fa-chevron-left" aria-hidden="true"></i>
                            </span>Back to shop</button>
                        <hr></hr>
                    </div> */}
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">{addedProducts.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {addedProducts&&addedProducts.map((item,index) => {
                                return (
                                    <li className="list-group-item d-flex justify-content-between lh-condensed" key={index}>
                                        <div className="text-right">
                                            <button className="btn" onClick={this.onRemoveItem(item)}>x</button>
                                        </div>
                                        <div className="text-left">
                                            <h6 className="my-0">{item.name} ({item.price}$)</h6>
                                            <small className="text-muted">{item.description}</small>
                                            <h6>Quantity: {item.quantity}</h6>
                                            <span className="text-muted">${item.price*item.quantity}</span>
                                        </div>
                                    </li>
                                )
                            })}
                            <li className="list-group-item d-flex justify-content-between text-right">
                                <span>Total ($) = </span>
                                <strong className='text-danger'>{total.toFixed(1)}</strong>
                            </li>
                        </ul>

                    </div>
                    {!(LocalStorageHelper.getItem('authToken'))&&<div className={(LocalStorageHelper.getItem('authToken')!=null? ' d-none':'')}>
                        <a
                            href="#login"
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                        >
                            <span className="glyphicon glyphicon-log-in "></span>
                            Checkout
                            </a>
                        <Login />
                    </div>}
                    <div>
                        {(LocalStorageHelper.getItem('authToken'))&&<div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Billing address</h4>
                            <form className="form-signin" onSubmit={this.onSubmit}>
                                <div className="text-center mb-4">
                                    <h1 className="h3 mb-3 font-weight-normal">Checkout</h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="firstName">Name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value={user.name} required />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="username">Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" className="form-control" name="username" placeholder="Username" required="" value={user.username} />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={user.email} required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" name="address" required value={user.address} />
                                </div>

                                <hr></hr>
                                <h4 className="mb-3">Payment</h4>

                                <div className="d-block my-3">
                                    <div className="custom-control custom-radio">
                                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" value="" />
                                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" value="" />
                                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" value="" />
                                        <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-name">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" value="" />
                                        <small className="text-muted">Full name as displayed on card</small>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-number">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" value="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" value="" />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" value="" />
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <button className="btn btn-lg btn-primary btn-block" type="submit" data-toggle="modal" data-target="#checkout">Checkout</button>
                                {/* <div className="modal fade" id="checkout">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <h4>Created successfully!</h4>
                                            </div>
                                        </div>
                                    </div>>
                                </div> */}
                            </form>
                        </div>
                        }
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps=(state) => {
    return {
        addedProducts: state.cart.addedProducts,
    }
}

const mapDispatchToProps=(dispatch) => {
    return {
        getCart: () => {
            dispatch(getCart())
        },
        resetCart: () => {
            dispatch(resetCart())
        },
        removeItem: (product) => {
            dispatch(removeItem(product))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentPage)
