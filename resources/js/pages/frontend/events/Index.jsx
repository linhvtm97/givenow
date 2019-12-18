import React from 'react'
import EventsRequests from '../../../requests/frontend/EventsRequests';
import CausesRequests from '../../../requests/backend/CausesRequests';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            events: [],
            searchValue: '',
            location: '',
            filter: '',
            causes: []
        }
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

    componentDidMount() {
        EventsRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({events: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
        CausesRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({causes: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }
    onSendQuery=(params) => {
        this.setState({
            searchValue: params.q,
            location: params.location,
            filter: params.filter
        })
    }
    render() {
        let {causes,events,searchValue,filter}=this.state

        if(searchValue) {
            events=events.filter(event => {
                return event.name.toLowerCase().indexOf(searchValue)!==-1
            })
        }
        if(filter) {
            events=events.sort((a,b) => {
                if(filter==='0') {
                    return 0
                }
                if(filter==='1') {
                    if(a.end_date<b.end_date) return 1; else return -1;
                }
                if(filter==='2') {
                    if(a.name>b.name) return 1; else return -1;
                }
            })
        }
        return (
            <div>
                <hr className="style4">
                </hr>
                <div className="container text-center">
                    <div className="caption bg-blue">
                        <h2 className="text-white">Explore all events</h2>
                    </div>
                    <hr className="style4">
                    </hr>
                </div>
                <div className="container mg-10">
                    <div className="row">
                        <div className="col-xs-3 col-sm-4 col-4 col-md-3 col-lg-3 mg-10">
                            <h3>Search by key word</h3>
                            <hr>
                            </hr>
                            <div className="text-center">
                                <input type="search" name="searchValue" id="input" className="form-control" value={this.state.searchValue} required="required" title="" onChange={this.handleOnChange} />
                                <button type="button" className="btn btn-primary mg-10">Search</button>
                            </div>
                            <h3>Causes</h3>
                            <hr></hr>
                            <div className="checkbox">
                                {
                                    causes.map((item,index) => {
                                        return (
                                            <div key={index}>
                                                <label>
                                                    <input type="checkbox" value={item.id} onChange={this.handleOnChange} />
                                                    {item.name}
                                                </label>
                                                <br></br>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-primary mg-10">Search</button>
                            </div>
                            <h3>Sort by</h3>
                            <hr></hr>
                            <div className="">
                                <select name="filter" className="form-control" value={this.state.filter} onChange={this.handleOnChange}>
                                    <option value="0">Sort all</option>
                                    <option value="1">Ending soon</option>
                                    <option value="2">Title</option>
                                    {/* <option value="2">High rating events</option> */}
                                </select>
                            </div>
                        </div>
                        <div className="col-xs-9 col-sm-8 col-8 col-md-9 col-lg-9 mg-10">
                            {
                                events.map((item,index) => {
                                    console.log(item.end_date);

                                    var end_date=Date.parse(item.end_date);
                                    var today=new Date();
                                    var now=Date.parse(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate());
                                    var isvalid=false;
                                    if(end_date>=now) {
                                        isvalid=true;
                                    }
                                    return (
                                        <div className="col-xs-12 col-sm-12 col-12 col-md-6 col-lg-6 mg-10" key={index}>
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <div className="event-container">
                                                        <div className="image-container">
                                                            <img src={item.image} className="image-thumbnail" alt="Item"></img>
                                                        </div>
                                                        <div className="event-content-thumbnail">
                                                            <a href={`events/${item.id}`}><h4>{item.name}</h4>
                                                            </a>
                                                            <p>
                                                                <i className="fa fa-map-marker"></i>{item.location}
                                                            </p>
                                                        </div>
                                                        <p className="text-danger">End date: {item.end_date}</p>
                                                        <div className="text-center">
                                                            <div className={isvalid? "":"hidden"}>
                                                                <a className="btn btn-danger" href={`/shop/event/${event.id}`} role="button">Shop now</a>
                                                            </div>
                                                        </div>
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
            </div>
        );
    }
}

export default Index
