import React,{Component} from 'react';

export default class extends Component {
    render() {
        return (
            <div>
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Event Chart</h6>
                        </div>
                        <div className="card-body">
                            <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                <canvas ref="canvas" id="myAreaChart" width="1049" height="320" className="chartjs-render-monitor"></canvas>
                            </div>
                            <hr></hr>
                            {/* Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file. */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
