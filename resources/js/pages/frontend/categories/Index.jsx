import React from 'react'
import CategoriesRequests from '../../../requests/backend/CategoriesRequests';
import ProductsRequests from '../../../requests/backend/ProductsRequests';
import {log} from 'util';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            categories: [],
            products: []
        }
    }


    componentDidMount() {
        CategoriesRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({categories: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
        ProductsRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({products: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }
    render() {
        let {categories,products}=this.state
        return (
            <div className="container">
                <img src="/images/goodslogo.jpg"></img>
                <h4><i>Support charities across the nation by donating top-needed items from their wishlists. All donations are delivered directly at the end of each drive.</i></h4>
                <div className="container">
                    {
                        categories.map((item,index) => {
                            return (
                                <a key={index} href={`#${item.name}`} type="button" className="btn btn-light mg-10">
                                    {item.name}
                                </a>
                            )
                        })
                    }
                </div>
                <hr></hr>
                <div className="container">
                    {
                        categories.map((item,index) => {
                            return (
                                <div id={item.name} key={index}>
                                    <h4 className="text-center">{item.name}</h4>
                                    <hr></hr>
                                    <div className="container">
                                        {
                                            item.products.map((product,index) => {
                                                return (
                                                    <div key={index} className="col-sm-3 col-4 col-md-4 col-xs-12">
                                                        <img src={product.image} className="image-thumbnail"></img>
                                                        <h4 className="text-center">{product.name}</h4>
                                                    </div>
                                                )
                                            })
                                        }
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

export default Index
