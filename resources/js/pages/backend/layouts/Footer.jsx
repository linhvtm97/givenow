import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <footer className="sticky-footer">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Your Website 2019</span>
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </footer>
        );
    }
}
