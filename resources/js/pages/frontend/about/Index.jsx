import React from 'react'

class Index extends React.Component {
    render() {
        return (
            <div>
                <hr className="style4"></hr>
                <div className="container text-center">
                    <div class="caption bg-blue">
                        <h2 className="text-white">Who we are ?</h2>
                    </div>
                    <hr className="style4"></hr>
                </div>

                <div class="container no-mg">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <hr className="style5"></hr>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <h2 className='text-center'>About us</h2>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <hr className="style5"></hr>
                    </div>
                </div>
                <div className="container">

                    <h4><i>Givenow was founded in 2019 to solve a problem: In a world where we can order anything we need online and have it arrive at our doorstep, collecting goods for charity using cardboard boxes seemed like a system ripe for disruption.
We decided the best way to tackle this outdated system was to use the e-commerce business model. We are proud to be what Forbes calls "the impact model of the future," a for profit social enterprise.</i></h4>
                    <div className="thumbnail">
                        <img src="/images/bg2.jpg"></img>
                    </div>

                </div>
                <div className="container">
                    <div class="container no-mg">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <hr className="style5"></hr>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <h2 className='text-center'>Why good not cash ?</h2>
                        </div>
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                            <hr className="style5"></hr>
                        </div>
                    </div>
                    <div className="container mg-10">
                        <div className="row">
                            <h4><i>Givenow was established on the belief that some
                                    charitable people prefer to donate goods either in addition to or in lieu of cash. And while
                                    charities rely heavily on cash donations, donations of goods serve an immediate purpose
                                    while freeing up cash for other areas of operations.
                                    Our innovation aims not only at simplifying the process of donating goods but improving it
                                    by getting only needed, new goods to charities which eliminates the problem of donated goods
                            being damaged, old, or otherwise unable to be used by the charity.</i></h4>
                            <div className="col-lg-6">
                                <h2 className="font-weight-light">No subscription fee, no commitment</h2>
                                <p className="font-italic text-muted mb-4">Givenow collects no fees from the charity or
                                    the drive starter and there is absolutely no commitment. In addition, we offer free
                                marketing tools, unbeatable customer service, corporate event reporting and more.</p>
                                <div className="thumbnail">
                                    <img src="/images/bg2.jpg"></img>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="font-weight-light">Share things and spread love</h2>
                                <p className="font-italic text-muted mb-4">Givenow makes charitable giving easy and
                                    completely transparent with our free, innovative giving platform. Make a strong impact
                                in local communities activities by getting new, needed goods to charities.</p>
                                <div className="thumbnail">
                                    <img src="/images/bg2.jpg"></img>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="font-weight-light">A fully integrated system for greater impact</h2>
                                <p className="font-italic text-muted mb-4">As an added benefit to our corporate partners,
                                    Givenow service includes integration with your corporate match, foundation match,
                                    charitable accounts and payroll deduction. Also, YGG events can be uploaded onto
                                existing workplace giving platforms.</p>
                                <div className="thumbnail">
                                    <img src="/images/bg2.jpg"></img>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="font-weight-light">Secure and transparent giving</h2>
                                <p className="font-italic text-muted mb-4">Unlike a cash donation, there is never any
                                    question about how a donor's contribution will be used. All purchased items are
                                    delivered to the selected charity at the close of the event. By approaching our system
                                in many different ways, your love will spread moodly. Don't be shy to share.</p>
                                <div className="thumbnail">
                                    <img src="/images/bg2.jpg"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr className="style5"></hr>
                    <div className="container text-center mg-10">
                        <h4><i>If you want to get more information, Do not hesitage to contact us!</i></h4>
                        <a class="btn btn-info hard-button" href='/contact-us' role="button">Contact us</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Index
