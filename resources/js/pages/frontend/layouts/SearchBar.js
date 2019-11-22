import React,{Component} from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      q: '',
      location: '',
      filter: ''
    }
  }

  onChange=(e) => {
    let target=e.target;
    let name=target.name;
    let value=
      target.type==="checkbox"
        ? target.checked
        :target.value;
    this.setState({
      [name]: value
    },() => {
      this.props.onSendQuery(this.state)
    });

  };
  onSubmit=(e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <select name="filter" className="form-control" value={this.state.filter} onChange={this.onChange}>
              <option value="0">Sort all</option>
              <option value="1">Recently events</option>
              <option value="2">High rating events</option>
            </select>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          </div>
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <form method="POST" onSubmit={this.onSubmit}>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="form-group">
                  <input type="text" className="form-control" name="q" placeholder="Search" required value={this.state.q} onChange={this.onChange} />
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}


SearchBar.propTypes={

};


export default SearchBar;