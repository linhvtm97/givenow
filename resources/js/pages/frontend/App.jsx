import React,{Component} from 'react';
import Footer from './layouts/Footer.jsx';
import Route from './Route.jsx';
import Header from './layouts/Header.jsx';


export default class extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <Route />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
