import React,{Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <img src="/images/bg2.jpg" alt="pic" className="img-thumbnail"></img>
                </div>
                <div className="container">
                    <h3 className="text-center">
                        <span>C</span>ontact
        <span>U</span>s
      </h3>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="text-center">
                                <i className="fa fa-map-marker"></i>
                                <h4>Address</h4>
                                <p>54 Nguyen Luong Bang</p>
                                <label>Da Nang</label>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center">
                                <i className="fa fa-phone"></i>
                                <h4>Call Us</h4>
                                <p>+(0121) 121 121</p>
                                <p>+(0121) 121 122</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center">
                                <i className="fa fa-envelope-open"></i>
                                <h4>Email</h4>
                                <p>
                                    <a href="mailto:info1@givenow.com">info1@givenow.com</a> </p>
                                <p>
                                    <a href="mailto:info2@givenow.com">info2@givenow.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="contact-grids1 w3agile-6">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                    <label className="col-form-label">Name</label>
                                    <input type="text" className="form-control" name="Name" placeholder="" required="" />
                                </div>
                                <div className="col-md-6 col-sm-6 contact-form1 form-group">
                                    <label className="col-form-label">E-mail</label>
                                    <input type="email" className="form-control" name="Email" placeholder="" required="" />
                                </div>
                            </div>
                            <div className="contact-me animated wow slideInUp form-group">
                                <label className="col-form-label">Message</label>
                                <textarea name="Message" className="form-control" placeholder="" required=""> </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
          </button>
                        </div>
                    </form>
                </div>

                <div className="container mg-10">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.839692534255!2d108.14772015067068!3d16.07380644352954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68e8ccb03%3A0x64dc2cb3e38bbdaf!2zNTQgTmd1eeG7hW4gTMawxqFuZyBC4bqxbmcsIEhvw6AgS2jDoW5oIELhuq9jLCBMacOqbiBDaGnhu4N1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2sin!4v1574235547858!5m2!1sen!2sin" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        );
    }
}


export default Index;
