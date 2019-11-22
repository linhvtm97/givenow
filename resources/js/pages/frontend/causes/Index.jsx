import React,{Component} from 'react';
import CausesRequest from '../../../requests/backend/CausesRequests';

class Cause extends Component {
    constructor(props) {
        super(props);
        this.state={
            causes: []
        }
    }

    componentDidMount() {
        CausesRequest.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({causes: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }
    render() {
        let {causes}=this.state
        return (
            <div className="container">
                <div class="panel panel-default">
                    <div class="panel-body">
                        {
                            causes.map((item,index) => {
                                return (
                                    <div className="col-xs-12 col-sm-4 col-4 col-md-4 col-lg-4 no-padding" key={index}>
                                        <div className="image-container">
                                            <img src={item.image} className="image-thumbnail" data-toggle="tooltip" data-placement="bottom"
                                                title="Hooray!" alt="Item"></img>
                                            <div className="overlay">
                                                <div className="block-center text-center">
                                                    <h2>{item.name}</h2>
                                                    <button type="button" className="btn btn-primary">Read more</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default Cause;
