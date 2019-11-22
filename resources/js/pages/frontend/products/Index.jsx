import React,{Component} from 'react';
import ProductsRequests from '../../../requests/backend/ProductsRequests';
import EventsRequests from '../../../requests/backend/EventsRequests';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: [],
            event: {}
        }
    }

    componentDidMount() {

        ProductsRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({products: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
        console.log(this.state);

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
    render() {
        let {products,event}=this.state

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
                        <select name="filter" className="form-control" value={this.state.filter} onChange={this.onChange}>
                            <option value="0">Sort all</option>
                            <option value="1">Common added</option>
                            <option value="2">Under 50$</option>
                        </select>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    {
                        products.map((product,index) => {
                            return (
                                <div className="container" key={index}>
                                    <div className=" col-sm-3 col-md-3 col-xs-3 col-lg-3">
                                        <div className="image-container mg-10">
                                            <img src={product.avatar} alt="product" className="image-thumbnail"></img>
                                        </div>
                                    </div>
                                    <div className=" col-sm-6 col-md-6 col-xs-6 col-lg-6 ">
                                        <h3>{product.price}$ {product.name}</h3>
                                        <h4>{product.description}</h4>
                                    </div>
                                    <div className="col-sm-3 col-md-3 col-xs-3 col-lg-3">
                                        <div className="row">
                                            <h3 className="text-right">{product.price}$</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2 col-md-2 col-xs-2 col-lg-2"></div>
                                            <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                                                <input type="text" name="" id="input" className="form-control" value="1" required="required" pattern="" title="" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 col-xs-6 col-lg-6">
                                                <button type="button" className="btn btn-lg btn-warning">Add to card</button>
                                            </div>                    </div>
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


export default Index;
