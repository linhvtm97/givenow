import React,{Component} from 'react';

class Banner extends Component {
  render() {
    return (
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li
            data-target="#myCarousel"
            data-slide-to="1"
          ></li>
          <li
            data-target="#myCarousel"
            data-slide-to="2"
          ></li>
          <li
            data-target="#myCarousel"
            data-slide-to="3"
          ></li>
          <li
            data-target="#myCarousel"
            data-slide-to="4"
          ></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img
              src="/images/banner1.jpg"
              alt="Chania"
            />
            {/* <div className="carousel-caption">
                <h3>Share things, Share moment</h3>
                <p>The more you give, the more you receive</p>
              </div> */}
          </div>

          <div className="item">
            <img
              src="/images/banner2.jpg"
              alt="Chicago"
            />
            {/* <div className="carousel-caption">
                <h3>Listen to your heart</h3>
                <p>Give love everyday, receive love in a whole life!</p>
              </div> */}
          </div>

          <div className="item">
            <img
              src="/images/banner3.jpg"
              alt="Chicago"
            />
            {/* <div className="carousel-caption">
                <h3>Listen to your heart</h3>
                <p>Give love everyday, receive love in a whole life!</p>
              </div> */}
          </div>

          <div className="item">
            <img
              src="/images/banner4.jpg"
              alt="Chicago"
            />
            {/* <div className="carousel-caption">
                <h3>Listen to your heart</h3>
                <p>Give love everyday, receive love in a whole life!</p>
              </div> */}
          </div>

          <div className="item">
            <img
              src="/images/banner5.jpg"
              alt="Chicago"
            />
            {/* <div className="carousel-caption">
                <h3>Listen to your heart</h3>
                <p>Give love everyday, receive love in a whole life!</p>
              </div> */}
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">
            Previous
                                                            </span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">
            Next
                                                            </span>
        </a>
      </div>
    );
  }
}

export default Banner;
