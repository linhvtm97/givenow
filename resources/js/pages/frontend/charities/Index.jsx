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
            filter: '',
            form: {
                name: '',
                description: '',
                email: '',
                website: '',
                address: '',
                phone_number: '',
            },
            formData: {},
            messageError: '',
        }
    }


    handleOnChange=event => {
        let {form}=this.state;
        form={...form,...{[event.target.name]: event.target.value}}
        this.setState({form})
    }
    submitForm=event => {
        event.preventDefault();
        let {formData,form}=this.state;
        formData.append('name',form.name);
        formData.append('description',form.description);
        formData.append('email',form.email);
        formData.append('address',form.address);
        formData.append('website',form.website);
        formData.append('phone_number',form.phone_number);


        CharitiesRequests.create(formData).then((response) => {
            if(response.meta.status===201) {
                console.log(response.data.id);
                if(response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.charities.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.charities.index.path);
                }
            } else {
                this.state.messageError=response.meta.message;
            }
        });
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
                                            <div className="text-center mg-10">
                                                <button className="btn btn-primary" data-toggle="modal" href='#join-in-form'>
                                                    Join in</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        <h2 className="text-center text-primary"><i>CHARITIES ARE CHOOSING GIVENOW FREE GIVING PLATFORM</i></h2>
                        <div className="container no-mg">
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <hr className="style5"></hr>
                            </div>
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                <h3 className='text-center text-primary'><i>WHY US ?</i></h3>
                            </div>
                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <hr className="style5"></hr>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row ">
                                <ul>
                                    <div className="col-lg-3">
                                        <li>
                                            <h3 className="font-weight-light text-danger text-center">Raise more for charity</h3>
                                            <p>
                                                Our technology is made for social sharing. This peer-to-peer connection, plus the
                                                ease of online shopping, makes it possible to raise more items for charity than ever
                                                before.
                                </p>
                                        </li>
                                    </div>
                                    <div className="col-lg-3">
                                        <li>
                                            <h2 className="font-weight-light text-danger text-center">Charities are fully vetted</h2>
                                            <p>
                                                Donors can be assured that all goods purchased for donation are shipped to the
                                                chosen charity which has been checked by Givenow
                                </p>
                                        </li>
                                    </div>
                                    <div className="col-lg-3">
                                        <li>
                                            <h2 className="font-weight-light text-danger text-center">More than online shopping</h2>
                                            <p>
                                                Unlike services like large online shopping wishlists, Givenow offers a fully
                                                personalized online event and a designated customer
                                                service associate to help plan and facilitate all aspects of your event.
                                </p>
                                        </li>
                                    </div>
                                    <div className="col-lg-3">
                                        <li>
                                            <h2 className="font-weight-light text-danger text-center">Spread your love by sharing</h2>
                                            <p>
                                                Givenow makes charitable giving easy and completely transparent with our free,
                                                innovative giving platform.
                                </p>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <h4><i class="fa fa-hand-point-right"></i>Want to be our partner as a charity? <a type="button" className="btn hard-button" data-toggle="modal" href='#charity-request-form'>Register now</a></h4>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="charity-request-form">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-title">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h2 className="text-center text-primary">CHARITY REQUEST FORM</h2></div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name"
                                                name="name" onChange={this.handleOnChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="image">Image</label>
                                            <input type="file" className="form-control" id="image"
                                                name="image" onChange={this.onChangeFile} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Email</label>
                                            <input type="text" className="form-control" id="email"
                                                name="email" onChange={this.handleOnChange} value={this.state.form.email} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Website</label>
                                            <input type="text" className="form-control" id="website"
                                                name="website" onChange={this.handleOnChange} value={this.state.form.website} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Address</label>
                                            <input type="text" className="form-control" id="address"
                                                name="address" onChange={this.handleOnChange} value={this.state.form.address} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Phone Number</label>
                                            <input type="text" className="form-control" id="phone_number"
                                                name="phone_number" onChange={this.handleOnChange} value={this.state.form.phone_number} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <input type="text" className="form-control" id="description"
                                                name="description" onChange={this.handleOnChange} />
                                        </div>
                                        <button type="button" className="btn btn-primary"
                                            onClick={this.submitForm}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="join-in-form">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <div className="alert alert-secondary" role="alert">
                                    <h4>Your request has been sent!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Index;
