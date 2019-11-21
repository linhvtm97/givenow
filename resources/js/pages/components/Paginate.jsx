import ReactPaginate from 'react-paginate';
import React, { Component } from 'react';

export default class extends Component {

    constructor(props) {
        super(props);
    }

    onPageChange(page) {

    }

    render() {
        const { pageCount, page } = this.props;
        return (
            <div className="card-footer small text-muted">
                <ReactPaginate
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    previousLabel=""
                    nextLabel=""
                    activeClassName={"active"}
                    onPageChange={page => this.onPageChange(page)}
                    initialPage={Number(page - 1)}
                />
            </div>
        );
    }
}
