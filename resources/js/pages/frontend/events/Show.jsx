import React,{Component} from 'react';
import EventsRequests from '../../../requests/backend/EventsRequests'

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
        var current_items=event.current_items
        var goal_item=event.goal_item
        // var start_date=Date.parse(event.start_date);
        var end_date=Date.parse(event.end_date);
        var today=new Date();
        var now=Date.parse(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate());
        var isvalid=false;
        if(end_date>=now) {
            isvalid=true;
        }

        return (
            <div>
                <div className="container">
                    <div className="row text-center">
                        <hr></hr>
                        <h5 className="text-danger"><i className="fa fa-calendar"></i> {event.start_date} - <i className="fa fa-calendar"></i> {event.end_date}</h5>
                        <h3 className="text-primary">{event.name}</h3>
                        <h4 className="text-second">Cause: {event.cause_name}</h4>
                        <h5> <i className="fa fa-map-marker"></i><i>{event.location}</i></h5>
                    </div>
                </div>
                <hr>
                </hr>
                <div className="container">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {/* <img src="/images/bg2.jpg" className="img-thumbnail" alt="bg"></img> */}
                        <img src={event.image} className="img-thumbnail" alt="bg"></img>
                        <h3 className="text-white">Share with</h3>
                        <button type="button" className="btn btn-primary"><i className="fa fa-facebook-f pr-1"></i></button>
                        <button type="button" className="btn btn-info"><i className="fa fa-instagram pr-1"></i></button>
                        <button type="button" className="btn btn-danger"><i className="fa fa-youtube"></i></button>
                        <button type="button" className="btn btn-primary"><i className="fa fa-twitter pr-1"></i></button>
                        <h3>{event.name}</h3>
                        <p>{event.text}</p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <p>{event.description}</p>

                        <div className="progress">
                            <div className="progress-bar w-75 bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: (current_items*100/goal_item).toFixed()+'%'}}
                            >
                                {(current_items*100/goal_item).toFixed()}%
                            </div>
                        </div>
                        <h5 className="text-danger"><i className="fa fa-clock-o" aria-hidden="true"></i>Due at: {event.end_date}</h5>

                        <div className={isvalid? "":"hidden"}>
                            <p>Last chance to give!</p>
                            <a className="btn btn-danger" href={`/shop/event/${event.id}`} role="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="container text-center mg-10">
                    <h4><i className="fa fa-users"></i>1000 people contributed</h4>
                    <h3>Make a difference & raise some goods for</h3>
                    <a href="/"><h5>The New York Foundling</h5></a>
                    <div className={isvalid? "":"hidden"}>
                        <p>Last chance to give!</p>
                        <a className="btn btn-danger" href={`/shop/event/${event.id}`} role="button">Shop now</a>
                    </div>                </div>
            </div>
        );
    }
}

export default Show;
