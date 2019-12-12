import React,{Component} from 'react';
import CharitiesRequests from '../../../requests/backend/CharitiesRequests';
import SearchBar from '../layouts/SearchBar'
import RouteConst from '../../../constants/Route';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            charities: [],
            searchValue: '',
            location: '',
            filter: ''
        }
    }


    componentDidMount() {
        CharitiesRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({charities: response.data});
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
        let {charities,searchValue,filter}=this.state
        console.log(charities);

        if(searchValue) {
            charities=charities.filter(event => {
                return event.name.toLowerCase().indexOf(searchValue)!==-1
            })
        }
        if(filter) {
            charities=charities.sort((a,b) => {
                if(filter==='0') {
                    return 0
                }
                if(filter==='1') {
                    if(a.start_date<b.start_date) return filter;
                    else return -filter;
                }
                if(filter==='2') {
                    if(a.name>b.name) return 1; else return -1;
                }
            })
        }
        return (
            <div>
                <hr className="style4"></hr>
                <div className="container">
                    <div className="row">
                        <h2 className="text-center">Charities are choosing GiveNow Free Giving Platform</h2>
                        <div className="container no-mg">
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <hr className="style5"></hr>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h2 className='text-center'>Why us ?</h2>
                            </div>
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <hr className="style5"></hr>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <h2 className="font-weight-light">Raise more for charity</h2>
                                            <p>
                                                Our technology is made for social sharing. This peer-to-peer connection, plus the
                                                ease of online shopping, makes it possible to raise more items for charity than ever
                                                before.
                                </p>
                                        </li>
                                        <li>
                                            <h2 className="font-weight-light">Charities are fully vetted</h2>
                                            <p>
                                                Donors can be assured that all goods purchased for donation are shipped to the
                                                chosen charity which has been vetted by YouGiveGoods staff as an NPO in good
                                                standing.
                                </p>
                                        </li>
                                        <li>
                                            <h2 className="font-weight-light">More than online shopping</h2>
                                            <p>
                                                Unlike services like large online shopping wishlists, YouGiveGoods offers a fully
                                                personalized online event, real-time donation tracking, and a designated customer
                                                service associate to help plan and facilitate all aspects of your event.
                                </p>
                                        </li>
                                        <li>
                                            <h2 className="font-weight-light">Spread your love by sharing</h2>
                                            <p>
                                                YouGiveGoods makes charitable giving easy and completely transparent with our free,
                                                innovative giving platform. A personalized YGG event enables individuals, companies,
                                                schools and groups to make a tangible impact in local communities by getting new,
                                                needed goods to charities.
                                </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-1 mg-10">
                                </div>
                                <div className="col-lg-5 mg-10">
                                    <img src="images/logo.jpg" className="" alt=" " />
                                    <img src="images/logo.jpg" className="" alt=" " />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                    </div>
                    <div className="container text-center">
                        <div className="caption bg-blue">
                            <h2 className="text-white">Explore our charities</h2>
                        </div>
                        <hr className="style4">
                        </hr>
                    </div>
                    <div className="container mg-10">
                        <div className="container">
                            <SearchBar onSendQuery={this.onSendQuery} />
                        </div>
                        {
                            charities.map((item,index) => {
                                return (
                                    <div className="col-xs-4 col-sm-4 col-4 col-md-4 col-lg-4" key={index}>
                                        <div className="thumbnail">
                                            <div className="charity-image">
                                                <img src={item.image} className="charity-image"></img>
                                            </div>
                                            <h4>{item.name}</h4>

                                            <h6>{item.phone_number}</h6>
                                            <i className="fa fa-map-marker">{item.address}</i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <hr></hr>
                    <h1>Ready to raise for your cause?</h1>
                    <div className="row mg-10 text-center">
                        <br></br>
                        <a className="btn btn-primary hard-button" href={RouteConst.frontEnd.events.create.path} role="button">Start an event</a>
                        <span>Or</span>
                        <a className="btn btn-danger hard-button" href={RouteConst.frontEnd.events.index.path} role="button">Donate a cause</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
