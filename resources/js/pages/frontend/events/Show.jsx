import React,{Component} from 'react';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state={
            event: {},
        }
    }
    setStyle=(width) => {
        return {
            width: width
        }
    }
    componentDidMount() {
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
        let {event}=this.state
        return (
            <div>
                <div className="container">
                    <div className="row text-center">
                        <p>{event.start_date} - {event.end_date}</p>
                        <h3>{event.name}</h3>
                        <h5> <i className="fa fa-map-marker"></i>{event.location}</h5>
                    </div>
                </div>
                <hr>
                </hr>
                <div className="container">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <img src="/images/bg2.jpg" className="img-thumbnail" alt="bg"></img>
                        <h3 className="text-white">Share with</h3>
                        <button type="button" className="btn btn-primary"><i className="fa fa-facebook-f pr-1"></i></button>
                        <button type="button" className="btn btn-info"><i className="fa fa-instagram pr-1"></i></button>
                        <button type="button" className="btn btn-danger"><i className="fa fa-youtube"></i></button>
                        <button type="button" className="btn btn-primary"><i className="fa fa-twitter pr-1"></i></button>
                        <h3>{event.name}</h3>
                        <p>{event.text}</p>
                        <img src="/images/bg2.jpg" className="img-thumbnail" alt="bg"></img>
                        <p>Some text here</p>
                        <img src="/images/bg2.jpg" className="img-thumbnail" alt="bg"></img>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <p>{event.description}</p>

                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={Math.floor(parseInt(event.current_items==null?
                                0:event.current_items,10)*100/parseInt(event.goal_item,10))} aria-valuemin="0" aria-valuemax="100" stype={() =>
                                    this.setStyle(Math.floor(parseInt(event.current_items==null?
                                        0:event.current_items,10)*100/parseInt(event.goal_item,10)))}>
                                {event.current_items==null? 0:event.current_items}
                            </div>
                        </div>
                        <h5><i class="fa fa-clock-o" aria-hidden="true"></i> 16 Days remaining</h5>

                        <p>Last chance to give!</p>
                        <div className="text-center">
                            <a class="btn btn-danger" href={`/shop/event/${event.id}`} role="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="container text-center mg-10">
                    <h4><i className="fa fa-users"></i>1000 people contributed</h4>
                    <h3>Make a difference & raise some goods for</h3>
                    <a href="/"><h5>The New York Foundling</h5></a>
                    <a class="btn btn-danger" href={`/shop/event/${event.id}`} role="button">Shop now</a>
                </div>
            </div>
        );
    }
}

export default Show;
